import React from 'react';
import { motion } from 'motion/react';

interface FloatingButterflyProps {
  delay?: number;
  startX?: number;
  startY?: number;
}

export const FloatingButterfly: React.FC<FloatingButterflyProps> = ({ 
  delay = 0, 
  startX = 0, 
  startY = 0 
}) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${startX}%`, top: `${startY}%` }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left wing */}
        <ellipse 
          cx="8" 
          cy="12" 
          rx="6" 
          ry="8" 
          fill="#4169E1" 
          opacity="0.8"
          transform="rotate(-20 8 12)"
        />
        <ellipse 
          cx="8" 
          cy="12" 
          rx="4" 
          ry="6" 
          fill="#D4AF37" 
          opacity="0.4"
          transform="rotate(-20 8 12)"
        />
        
        {/* Right wing */}
        <ellipse 
          cx="16" 
          cy="12" 
          rx="6" 
          ry="8" 
          fill="#4169E1" 
          opacity="0.8"
          transform="rotate(20 16 12)"
        />
        <ellipse 
          cx="16" 
          cy="12" 
          rx="4" 
          ry="6" 
          fill="#D4AF37" 
          opacity="0.4"
          transform="rotate(20 16 12)"
        />
        
        {/* Body */}
        <ellipse cx="12" cy="12" rx="1.5" ry="6" fill="#182C52" />
        
        {/* Antennae */}
        <path 
          d="M12 6 Q10 2 9 1" 
          stroke="#182C52" 
          strokeWidth="0.5" 
          fill="none"
        />
        <path 
          d="M12 6 Q14 2 15 1" 
          stroke="#182C52" 
          strokeWidth="0.5" 
          fill="none"
        />
      </svg>
    </motion.div>
  );
};
