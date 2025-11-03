import React, { useRef, useEffect } from 'react';
import { HeadphoneProfile } from '../types';

interface EqVisualizerProps {
  analyserNode: AnalyserNode | null;
  isPlaying: boolean;
  profile: HeadphoneProfile | null;
  audioContext: AudioContext | null;
}

const EqVisualizer: React.FC<EqVisualizerProps> = ({ analyserNode, isPlaying, profile, audioContext }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;

    let animationFrameId: number;

    const draw = () => {
      animationFrameId = requestAnimationFrame(draw);
      
      canvasCtx.fillStyle = 'rgb(38, 38, 38)'; // neutral-900
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (analyserNode) {
          const bufferLength = analyserNode.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyserNode.getByteFrequencyData(dataArray);

          const barWidth = (canvas.width / bufferLength) * 2.5;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i];
            
            const shade = 50 + (barHeight / 255 * 150);
            canvasCtx.fillStyle = `rgba(${shade},${shade},${shade}, 0.7)`;
            canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

            x += barWidth + 1;
          }
      }

      // Draw the EQ curve last to ensure it's on top of the bars' background but under the bars themselves
      if (profile && audioContext) {
        drawEqCurve(canvasCtx, canvas.width, canvas.height, profile, audioContext);
      }
    };

    if (isPlaying) {
      draw();
    } else {
      // When not playing, draw a static state
      canvasCtx.fillStyle = 'rgb(38, 38, 38)'; // neutral-900
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
      if (profile && audioContext) {
        drawEqCurve(canvasCtx, canvas.width, canvas.height, profile, audioContext);
      }
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [analyserNode, isPlaying, profile, audioContext]);


  return <canvas ref={canvasRef} width="640" height="200" className="w-full h-48 bg-neutral-900 rounded-lg shadow-inner" />;
};

function drawEqCurve(ctx: CanvasRenderingContext2D, width: number, height: number, profile: HeadphoneProfile, audioContext: AudioContext) {
  if (profile.filters.length === 0) return;

  const frequencies = new Float32Array(width);
  const magResponse = new Float32Array(width);
  const phaseResponse = new Float32Array(width);

  const minFreq = 20;
  const maxFreq = 20000;
  
  for (let i = 0; i < width; i++) {
    const freqRatio = i / (width - 1);
    frequencies[i] = minFreq * Math.pow(maxFreq / minFreq, freqRatio);
  }

  const overallResponse = new Float32Array(width).fill(1);

  profile.filters.forEach(filterData => {
    const biquadFilter = audioContext.createBiquadFilter();
    biquadFilter.type = filterData.type;
    biquadFilter.frequency.value = filterData.frequency;
    biquadFilter.Q.value = filterData.q;
    biquadFilter.gain.value = filterData.gain;

    biquadFilter.getFrequencyResponse(frequencies, magResponse, phaseResponse);

    for (let i = 0; i < width; i++) {
      overallResponse[i] *= magResponse[i];
    }
  });

  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 3;
  ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
  ctx.shadowBlur = 6;

  const minGainDb = -18;
  const maxGainDb = 18;

  for (let i = 0; i < width; i++) {
    const db = 20 * Math.log10(overallResponse[i]);
    const y = height - ((db - minGainDb) / (maxGainDb - minGainDb)) * height;
    
    if (i === 0) {
      ctx.moveTo(i, y);
    } else {
      ctx.lineTo(i, y);
    }
  }
  ctx.stroke();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
}


export default EqVisualizer;