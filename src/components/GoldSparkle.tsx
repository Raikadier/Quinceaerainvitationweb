import { motion } from 'motion/react';

interface GoldSparkleProps {
  delay?: number;
  top?: string;
  left?: string;
  size?: number;
}

export function GoldSparkle({ 
  delay = 0, 
  top = '30%', 
  left = '20%',
  size = 16
}: GoldSparkleProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0.8, 1, 0],
        scale: [0, 1, 0.8, 1, 0],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Four-pointed star */}
        <path
          d="M 12 0 L 13 11 L 24 12 L 13 13 L 12 24 L 11 13 L 0 12 L 11 11 Z"
          fill="url(#sparkleGold)"
        />
        
        {/* Inner diamond for extra sparkle */}
        <path
          d="M 12 6 L 15 12 L 12 18 L 9 12 Z"
          fill="#F4D03F"
          opacity="0.8"
        />

        <defs>
          <linearGradient id="sparkleGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#F4D03F" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
