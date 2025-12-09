import { motion } from 'motion/react';

interface FloatingButterflyProps {
  delay?: number;
  top?: string;
  left?: string;
  duration?: number;
}

export function FloatingButterfly({ 
  delay = 0, 
  top = '20%', 
  left = '15%',
  duration = 4 
}: FloatingButterflyProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial={{ y: 0, opacity: 0.6 }}
      animate={{ 
        y: [-10, 10, -10],
        opacity: [0.6, 0.9, 0.6],
        x: [-5, 5, -5]
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left wing */}
        <path
          d="M 16 16 Q 10 12 8 8 Q 6 4 8 2 Q 10 4 11 8 Q 12 12 16 16 Z"
          fill="#182C52"
          opacity="0.8"
        />
        <path
          d="M 16 16 Q 12 14 10 10 Q 9 7 10 5 Q 11 7 12 10 Q 13 13 16 16 Z"
          fill="#4169E1"
          opacity="0.7"
        />
        
        {/* Right wing */}
        <path
          d="M 16 16 Q 22 12 24 8 Q 26 4 24 2 Q 22 4 21 8 Q 20 12 16 16 Z"
          fill="#182C52"
          opacity="0.8"
        />
        <path
          d="M 16 16 Q 20 14 22 10 Q 23 7 22 5 Q 21 7 20 10 Q 19 13 16 16 Z"
          fill="#4169E1"
          opacity="0.7"
        />

        {/* Lower left wing */}
        <path
          d="M 16 16 Q 11 18 9 22 Q 7 26 9 28 Q 11 25 12 21 Q 13 18 16 16 Z"
          fill="#2E4A7F"
          opacity="0.75"
        />

        {/* Lower right wing */}
        <path
          d="M 16 16 Q 21 18 23 22 Q 25 26 23 28 Q 21 25 20 21 Q 19 18 16 16 Z"
          fill="#2E4A7F"
          opacity="0.75"
        />

        {/* Gold body */}
        <ellipse cx="16" cy="16" rx="1.5" ry="8" fill="url(#butterflyGold)" />
        
        {/* Gold antennae */}
        <path
          d="M 15.5 8 Q 14 6 13 4"
          stroke="url(#butterflyGold)"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M 16.5 8 Q 18 6 19 4"
          stroke="url(#butterflyGold)"
          strokeWidth="0.8"
          fill="none"
        />
        <circle cx="13" cy="4" r="1" fill="#F4D03F" />
        <circle cx="19" cy="4" r="1" fill="#F4D03F" />

        {/* Gold center accent */}
        <circle cx="16" cy="16" r="2" fill="url(#butterflyGold)" opacity="0.9" />

        <defs>
          <linearGradient id="butterflyGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F4D03F" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
