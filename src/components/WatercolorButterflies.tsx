import { motion } from 'motion/react';

interface ButterflyProps {
  variant?: number; // 1-7
  delay?: number;
  top?: string;
  left?: string;
  size?: number;
  duration?: number;
}

export function WatercolorButterfly({ 
  variant = 1,
  delay = 0, 
  top = '20%', 
  left = '15%',
  size = 40,
  duration = 5
}: ButterflyProps) {
  // 7 different butterfly configurations with unique wing shapes
  const butterflyVariants = [
    // Variant 1: Classic monarch-like
    {
      leftWing: "M 16 16 Q 9 11 6 6 Q 3 1 5 0 Q 8 2 11 8 Q 14 14 16 16 Z",
      leftWingInner: "M 16 16 Q 12 13 10 9 Q 8 5 9 3 Q 11 5 13 10 Q 15 14 16 16 Z",
      rightWing: "M 16 16 Q 23 11 26 6 Q 29 1 27 0 Q 24 2 21 8 Q 18 14 16 16 Z",
      rightWingInner: "M 16 16 Q 20 13 22 9 Q 24 5 23 3 Q 21 5 19 10 Q 17 14 16 16 Z",
      lowerLeft: "M 16 16 Q 10 19 7 24 Q 4 29 6 30 Q 9 27 12 22 Q 14 18 16 16 Z",
      lowerRight: "M 16 16 Q 22 19 25 24 Q 28 29 26 30 Q 23 27 20 22 Q 18 18 16 16 Z",
      opacity: 0.85,
      blur: 1.2
    },
    // Variant 2: Wide delicate wings
    {
      leftWing: "M 16 16 Q 8 10 4 4 Q 1 0 3 -1 Q 7 2 12 10 Q 15 15 16 16 Z",
      leftWingInner: "M 16 16 Q 11 12 8 7 Q 6 3 7 2 Q 10 5 14 12 Q 15 15 16 16 Z",
      rightWing: "M 16 16 Q 24 10 28 4 Q 31 0 29 -1 Q 25 2 20 10 Q 17 15 16 16 Z",
      rightWingInner: "M 16 16 Q 21 12 24 7 Q 26 3 25 2 Q 22 5 18 12 Q 17 15 16 16 Z",
      lowerLeft: "M 16 16 Q 11 21 8 27 Q 5 32 7 33 Q 10 29 13 23 Q 15 18 16 16 Z",
      lowerRight: "M 16 16 Q 21 21 24 27 Q 27 32 25 33 Q 22 29 19 23 Q 17 18 16 16 Z",
      opacity: 0.8,
      blur: 1.5
    },
    // Variant 3: Compact rounded
    {
      leftWing: "M 16 16 Q 11 13 9 9 Q 7 5 8 4 Q 10 6 12 11 Q 14 15 16 16 Z",
      leftWingInner: "M 16 16 Q 13 14 11 11 Q 10 8 10.5 7 Q 12 9 14 13 Q 15 15 16 16 Z",
      rightWing: "M 16 16 Q 21 13 23 9 Q 25 5 24 4 Q 22 6 20 11 Q 18 15 16 16 Z",
      rightWingInner: "M 16 16 Q 19 14 21 11 Q 22 8 21.5 7 Q 20 9 18 13 Q 17 15 16 16 Z",
      lowerLeft: "M 16 16 Q 12 18 10 22 Q 8 26 9 27 Q 11 24 13 20 Q 15 17 16 16 Z",
      lowerRight: "M 16 16 Q 20 18 22 22 Q 24 26 23 27 Q 21 24 19 20 Q 17 17 16 16 Z",
      opacity: 0.9,
      blur: 0.8
    },
    // Variant 4: Elongated elegant
    {
      leftWing: "M 16 16 Q 10 12 7 7 Q 4 2 5 0 Q 8 3 11 9 Q 14 15 16 16 Z",
      leftWingInner: "M 16 16 Q 12 13 9.5 9 Q 7.5 5 8 4 Q 10 6 13 11 Q 15 15 16 16 Z",
      rightWing: "M 16 16 Q 22 12 25 7 Q 28 2 27 0 Q 24 3 21 9 Q 18 15 16 16 Z",
      rightWingInner: "M 16 16 Q 20 13 22.5 9 Q 24.5 5 24 4 Q 22 6 19 11 Q 17 15 16 16 Z",
      lowerLeft: "M 16 16 Q 11 20 8 26 Q 5 31 7 32 Q 10 28 12 22 Q 15 17 16 16 Z",
      lowerRight: "M 16 16 Q 21 20 24 26 Q 27 31 25 32 Q 22 28 20 22 Q 17 17 16 16 Z",
      opacity: 0.82,
      blur: 1.3
    },
    // Variant 5: Asymmetric artistic
    {
      leftWing: "M 16 16 Q 9 12 5 5 Q 2 0 4 -1 Q 8 2 12 10 Q 15 15 16 16 Z",
      leftWingInner: "M 16 16 Q 11 13 8 8 Q 6 4 7 3 Q 10 6 13 12 Q 15 15 16 16 Z",
      rightWing: "M 16 16 Q 23 13 26 8 Q 29 3 28 1 Q 25 4 21 11 Q 18 15 16 16 Z",
      rightWingInner: "M 16 16 Q 21 14 24 10 Q 26 6 25.5 5 Q 23 7 19 13 Q 17 15 16 16 Z",
      lowerLeft: "M 16 16 Q 10 19 7 25 Q 4 30 6 31 Q 9 27 12 21 Q 15 17 16 16 Z",
      lowerRight: "M 16 16 Q 22 20 25 26 Q 28 31 26 32 Q 23 28 20 23 Q 17 18 16 16 Z",
      opacity: 0.78,
      blur: 1.6
    },
    // Variant 6: Small delicate
    {
      leftWing: "M 16 16 Q 12 14 10 10 Q 8 6 9 5 Q 11 7 13 12 Q 15 15 16 16 Z",
      leftWingInner: "M 16 16 Q 13.5 14.5 12 11 Q 11 8 11.5 7.5 Q 13 9 14.5 13 Q 15.5 15 16 16 Z",
      rightWing: "M 16 16 Q 20 14 22 10 Q 24 6 23 5 Q 21 7 19 12 Q 17 15 16 16 Z",
      rightWingInner: "M 16 16 Q 18.5 14.5 20 11 Q 21 8 20.5 7.5 Q 19 9 17.5 13 Q 16.5 15 16 16 Z",
      lowerLeft: "M 16 16 Q 13 18 11 22 Q 9 26 10 27 Q 12 24 14 20 Q 15 17 16 16 Z",
      lowerRight: "M 16 16 Q 19 18 21 22 Q 23 26 22 27 Q 20 24 18 20 Q 17 17 16 16 Z",
      opacity: 0.88,
      blur: 0.9
    },
    // Variant 7: Dramatic spread
    {
      leftWing: "M 16 16 Q 8 9 3 3 Q 0 -1 2 -2 Q 6 1 11 9 Q 15 15 16 16 Z",
      leftWingInner: "M 16 16 Q 10 11 6 6 Q 4 2 5 1 Q 8 4 13 11 Q 15 15 16 16 Z",
      rightWing: "M 16 16 Q 24 9 29 3 Q 32 -1 30 -2 Q 26 1 21 9 Q 17 15 16 16 Z",
      rightWingInner: "M 16 16 Q 22 11 26 6 Q 28 2 27 1 Q 24 4 19 11 Q 17 15 16 16 Z",
      lowerLeft: "M 16 16 Q 10 21 6 28 Q 3 33 5 34 Q 8 30 12 23 Q 15 18 16 16 Z",
      lowerRight: "M 16 16 Q 22 21 26 28 Q 29 33 27 34 Q 24 30 20 23 Q 17 18 16 16 Z",
      opacity: 0.75,
      blur: 1.8
    }
  ];

  const config = butterflyVariants[Math.min(variant - 1, 6)];
  const filterId = `watercolor-butterfly-${variant}`;
  const blueGradientId = `blue-gradient-${variant}`;
  const goldGradientId = `gold-gradient-${variant}`;
  const wingHighlightId = `wing-highlight-${variant}`;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [-15, 15, -15],
        opacity: [0, config.opacity, config.opacity * 0.8, config.opacity, 0.5],
        x: [-8, 8, -8],
        rotate: [-5, 5, -5]
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Watercolor effect filter */}
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.4 0.3" 
              numOctaves="4" 
              seed={variant * 100}
              result="turbulence"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="turbulence" 
              scale="1.2" 
              xChannelSelector="R" 
              yChannelSelector="G"
              result="displacement"
            />
            <feGaussianBlur 
              in="displacement" 
              stdDeviation={config.blur} 
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1.2 0"
              result="coloredBlur"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Royal blue watercolor gradient */}
          <radialGradient id={blueGradientId} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#4169E1" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#2E4A7F" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#182C52" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0F1B2E" stopOpacity="0.6" />
          </radialGradient>

          {/* Wing highlight gradient */}
          <linearGradient id={wingHighlightId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#4169E1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2E4A7F" stopOpacity="0.2" />
          </linearGradient>

          {/* Gold gradient for body */}
          <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" stopOpacity="1" />
            <stop offset="30%" stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B8960C" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        <g filter={`url(#${filterId})`}>
          {/* Upper left wing - dark base */}
          <path
            d={config.leftWing}
            fill={`url(#${blueGradientId})`}
            opacity="0.85"
          />
          {/* Upper left wing - light overlay */}
          <path
            d={config.leftWingInner}
            fill={`url(#${wingHighlightId})`}
            opacity="0.6"
          />
          
          {/* Upper right wing - dark base */}
          <path
            d={config.rightWing}
            fill={`url(#${blueGradientId})`}
            opacity="0.85"
          />
          {/* Upper right wing - light overlay */}
          <path
            d={config.rightWingInner}
            fill={`url(#${wingHighlightId})`}
            opacity="0.6"
          />

          {/* Lower left wing */}
          <path
            d={config.lowerLeft}
            fill="#2E4A7F"
            opacity="0.75"
          />
          <path
            d={config.lowerLeft}
            fill={`url(#${wingHighlightId})`}
            opacity="0.4"
            transform="scale(0.8) translate(3, 3)"
          />

          {/* Lower right wing */}
          <path
            d={config.lowerRight}
            fill="#2E4A7F"
            opacity="0.75"
          />
          <path
            d={config.lowerRight}
            fill={`url(#${wingHighlightId})`}
            opacity="0.4"
            transform="scale(0.8) translate(-3, 3)"
          />

          {/* Wing patterns - delicate spots */}
          <circle cx="10" cy="10" r="1.5" fill="#87CEEB" opacity="0.5" />
          <circle cx="22" cy="10" r="1.5" fill="#87CEEB" opacity="0.5" />
          <circle cx="11" cy="22" r="1" fill="#4169E1" opacity="0.4" />
          <circle cx="21" cy="22" r="1" fill="#4169E1" opacity="0.4" />
        </g>

        {/* Body - painted outside filter for crispness */}
        <ellipse 
          cx="16" 
          cy="16" 
          rx="1.8" 
          ry="9" 
          fill={`url(#${goldGradientId})`} 
          opacity="0.95"
        />
        
        {/* Body segments */}
        <ellipse cx="16" cy="12" rx="1.5" ry="2" fill="#F4D03F" opacity="0.8" />
        <ellipse cx="16" cy="16" rx="1.5" ry="2" fill="#D4AF37" opacity="0.8" />
        <ellipse cx="16" cy="20" rx="1.5" ry="2" fill="#B8960C" opacity="0.8" />
        
        {/* Antennae */}
        <path
          d="M 15 8 Q 13 5 11 2"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 17 8 Q 19 5 21 2"
          stroke={`url(#${goldGradientId})`}
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="11" cy="2" r="1.2" fill="#F4D03F" opacity="0.9" />
        <circle cx="21" cy="2" r="1.2" fill="#F4D03F" opacity="0.9" />

        {/* Center body highlight */}
        <circle cx="16" cy="16" r="2.5" fill={`url(#${goldGradientId})`} opacity="0.7" />
        <circle cx="16" cy="15" r="1" fill="#FFFACD" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
