import React from 'react';

interface CornerFloralProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const CornerFloral: React.FC<CornerFloralProps> = ({ position }) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 -scale-x-100',
    'bottom-left': 'bottom-0 left-0 -scale-y-100',
    'bottom-right': 'bottom-0 right-0 -scale-x-100 -scale-y-100',
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-32 h-32 pointer-events-none opacity-90`}>
      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gold Filigree */}
        <path
          d="M0 0 Q40 0 40 40 L40 0 Q40 40 80 40 L40 40 Q80 40 80 80"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M0 10 Q30 10 30 30"
          stroke="#D4AF37"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        
        {/* Blue Rose */}
        <circle cx="45" cy="45" r="12" fill="#182C52" opacity="0.9" />
        <circle cx="42" cy="42" r="8" fill="#2E4A7F" opacity="0.8" />
        <circle cx="48" cy="48" r="6" fill="#4169E1" opacity="0.7" />
        
        {/* Small Hydrangea clusters */}
        <circle cx="70" cy="25" r="4" fill="#2E4A7F" opacity="0.7" />
        <circle cx="75" cy="28" r="4" fill="#4169E1" opacity="0.7" />
        <circle cx="72" cy="32" r="4" fill="#5A7FB8" opacity="0.7" />
        
        <circle cx="25" cy="70" r="4" fill="#2E4A7F" opacity="0.7" />
        <circle cx="28" cy="75" r="4" fill="#4169E1" opacity="0.7" />
        <circle cx="32" cy="72" r="4" fill="#5A7FB8" opacity="0.7" />
        
        {/* Gold leaves */}
        <ellipse cx="60" cy="50" rx="8" ry="4" fill="#D4AF37" opacity="0.5" transform="rotate(-30 60 50)" />
        <ellipse cx="50" cy="60" rx="8" ry="4" fill="#D4AF37" opacity="0.5" transform="rotate(-60 50 60)" />
      </svg>
    </div>
  );
};
