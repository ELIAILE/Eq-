import React from 'react';
import { PlayIcon, PauseIcon, VolumeUpIcon, VolumeOffIcon } from './Icons';

interface CaptureControlsProps {
  isCapturing: boolean;
  onStartCapture: () => void;
  onStopCapture: () => void;
  volume: number;
  onVolumeChange: (volume: number) => void;
}

const CaptureControls: React.FC<CaptureControlsProps> = ({
  isCapturing,
  onStartCapture,
  onStopCapture,
  volume,
  onVolumeChange,
}) => {
  const isMuted = volume === 0;

  const toggleMute = () => {
    onVolumeChange(isMuted ? 1 : 0);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 justify-center">
        <button
          onClick={isCapturing ? onStopCapture : onStartCapture}
          className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white w-64 ${
            isCapturing
              ? 'bg-black text-white border border-neutral-700 hover:bg-neutral-900'
              : 'bg-white text-black hover:bg-neutral-200'
          }`}
          aria-label={isCapturing ? 'Ferma Equalizzatore' : 'Avvia Equalizzatore'}
        >
          {isCapturing ? 'Ferma Equalizzatore' : 'Avvia Equalizzatore'}
        </button>
      </div>
       <div className="flex items-center gap-3 justify-center pt-2">
            <button 
                onClick={toggleMute} 
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label={isMuted ? 'Riattiva audio' : 'Muto'}
            >
                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </button>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
                className="w-40 h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-white"
                aria-label="Volume"
            />
        </div>
    </div>
  );
};

export default CaptureControls;