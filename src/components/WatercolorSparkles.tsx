import { motion } from 'motion/react';

interface SparkleProps {
  variant?: number; // 1-10
  delay?: number;
  top?: string;
  left?: string;
  size?: number;
}

export function WatercolorSparkle({ 
  variant = 1,
  delay = 0, 
  top = '30%', 
  left = '20%',
  size = 16
}: SparkleProps) {
  // 10 different sparkle configurations
  const sparkleVariants = [
    // Variant 1: Classic 4-pointed star
    { 
      path: "M 12 0 L 13.5 10.5 L 24 12 L 13.5 13.5 L 12 24 L 10.5 13.5 L 0 12 L 10.5 10.5 Z",
      innerPath: "M 12 5 L 14 12 L 12 19 L 10 12 Z",
      blur: 0.8,
      opacity: 0.9
    },
    // Variant 2: Wider pointed star
    {
      path: "M 12 2 L 13 11 L 22 12 L 13 13 L 12 22 L 11 13 L 2 12 L 11 11 Z",
      innerPath: "M 12 7 L 14.5 12 L 12 17 L 9.5 12 Z",
      blur: 1.2,
      opacity: 0.85
    },
    // Variant 3: Sharp narrow star
    {
      path: "M 12 0 L 12.5 11.5 L 24 12 L 12.5 12.5 L 12 24 L 11.5 12.5 L 0 12 L 11.5 11.5 Z",
      innerPath: "M 12 6 L 13 12 L 12 18 L 11 12 Z",
      blur: 0.6,
      opacity: 0.95
    },
    // Variant 4: Rounded soft star
    {
      path: "M 12 1 L 14 10 L 23 12 L 14 14 L 12 23 L 10 14 L 1 12 L 10 10 Z",
      innerPath: "M 12 6 L 15 12 L 12 18 L 9 12 Z",
      blur: 1.5,
      opacity: 0.8
    },
    // Variant 5: Asymmetric star
    {
      path: "M 12 0 L 14 11 L 24 11 L 14 13 L 13 24 L 11 13 L 0 13 L 10 11 Z",
      innerPath: "M 12 5 L 15 11 L 13 18 L 9 13 Z",
      blur: 1.0,
      opacity: 0.88
    },
    // Variant 6: Diamond-like star
    {
      path: "M 12 3 L 15 12 L 21 12 L 15 12 L 12 21 L 9 12 L 3 12 L 9 12 Z",
      innerPath: "M 12 7 L 14 12 L 12 17 L 10 12 Z",
      blur: 0.9,
      opacity: 0.92
    },
    // Variant 7: Elongated vertical
    {
      path: "M 12 0 L 13 11 L 20 12 L 13 13 L 12 24 L 11 13 L 4 12 L 11 11 Z",
      innerPath: "M 12 4 L 13.5 12 L 12 20 L 10.5 12 Z",
      blur: 1.1,
      opacity: 0.87
    },
    // Variant 8: Small compact star
    {
      path: "M 12 4 L 13 11 L 20 12 L 13 13 L 12 20 L 11 13 L 4 12 L 11 11 Z",
      innerPath: "M 12 8 L 13.5 12 L 12 16 L 10.5 12 Z",
      blur: 0.7,
      opacity: 0.9
    },
    // Variant 9: Wide cross-like
    {
      path: "M 12 2 L 14 10 L 22 12 L 14 14 L 12 22 L 10 14 L 2 12 L 10 10 Z",
      innerPath: "M 12 6 L 16 12 L 12 18 L 8 12 Z",
      blur: 1.3,
      opacity: 0.83
    },
    // Variant 10: Delicate thin star
    {
      path: "M 12 1 L 12.8 11.2 L 23 12 L 12.8 12.8 L 12 23 L 11.2 12.8 L 1 12 L 11.2 11.2 Z",
      innerPath: "M 12 6.5 L 13 12 L 12 17.5 L 11 12 Z",
      blur: 0.5,
      opacity: 0.93
    }
  ];

  const config = sparkleVariants[Math.min(variant - 1, 9)];
  const filterId = `watercolor-sparkle-${variant}`;
  const gradientId = `gold-gradient-${variant}`;
  const highlightId = `gold-highlight-${variant}`;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, config.opacity, config.opacity * 0.7, config.opacity, 0],
        scale: [0, 1, 0.85, 1, 0],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Watercolor turbulence filter */}
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.3" 
              numOctaves="3" 
              result="turbulence"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="turbulence" 
              scale="0.5" 
              xChannelSelector="R" 
              yChannelSelector="G"
              result="displacement"
            />
            <feGaussianBlur 
              in="displacement" 
              stdDeviation={config.blur} 
              result="blur"
            />
            <feBlend in="SourceGraphic" in2="blur" mode="normal" />
          </filter>

          {/* Complex gold gradient with multiple stops */}
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F4D03F" stopOpacity="1" />
            <stop offset="30%" stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#B8960C" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#F4D03F" stopOpacity="0.8" />
          </radialGradient>

          {/* Highlight gradient */}
          <linearGradient id={highlightId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFACD" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F4D03F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main sparkle shape with watercolor effect */}
        <g filter={`url(#${filterId})`}>
          {/* Base layer */}
          <path
            d={config.path}
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
          
          {/* Mid-tone layer for depth */}
          <path
            d={config.path}
            fill="#D4AF37"
            opacity="0.4"
            transform="scale(0.95) translate(0.6, 0.6)"
          />
          
          {/* Inner highlight diamond */}
          <path
            d={config.innerPath}
            fill={`url(#${highlightId})`}
            opacity="0.85"
          />

          {/* Center bright spot */}
          <circle 
            cx="12" 
            cy="12" 
            r="2" 
            fill="#FFFACD" 
            opacity="0.7"
          />
        </g>

        {/* Outer glow (no filter for crisp glow) */}
        <path
          d={config.path}
          fill="none"
          stroke="#F4D03F"
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
    </motion.div>
  );
}
