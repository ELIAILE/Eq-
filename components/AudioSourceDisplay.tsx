import React from 'react';
import { BroadcastIcon } from './Icons';

interface AudioSourceDisplayProps {
  isCapturing: boolean;
  sourceLabel: string;
}

const AudioSourceDisplay: React.FC<AudioSourceDisplayProps> = ({ isCapturing, sourceLabel }) => {
  return (
    <div className="bg-black/40 p-3 rounded-lg text-center mb-4">
      {isCapturing ? (
        <div className="flex items-center justify-center gap-3">
          <BroadcastIcon />
          <span className="text-sm text-white font-medium truncate" title={sourceLabel}>
            {sourceLabel}
          </span>
        </div>
      ) : (
        <p className="text-sm text-neutral-400 italic">Nessuna sorgente audio attiva...</p>
      )}
    </div>
  );
};

export default AudioSourceDisplay;
