import { WatercolorSparkle } from './WatercolorSparkles';
import { WatercolorButterfly } from './WatercolorButterflies';

/**
 * WatercolorExamples - Collection of usage examples
 * 
 * This file demonstrates different ways to use the watercolor assets
 * in various layout scenarios.
 */

// Example 1: Hero section with scattered elements
export function HeroWithWatercolor() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#F0F8FF] to-[#FFFEF9] flex items-center justify-center">
      {/* Sparkles scattered around */}
      <WatercolorSparkle variant={1} delay={0} top="15%" left="10%" size={18} />
      <WatercolorSparkle variant={3} delay={0.8} top="25%" left="85%" size={16} />
      <WatercolorSparkle variant={5} delay={1.6} top="45%" left="12%" size={20} />
      <WatercolorSparkle variant={7} delay={2.4} top="65%" left="88%" size={14} />
      <WatercolorSparkle variant={9} delay={3.2} top="75%" left="50%" size={22} />

      {/* Butterflies floating gracefully */}
      <WatercolorButterfly variant={1} delay={0} top="20%" left="15%" size={40} />
      <WatercolorButterfly variant={4} delay={1} top="40%" left="80%" size={44} />
      <WatercolorButterfly variant={6} delay={2} top="70%" left="25%" size={36} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-['Great_Vibes'] bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
          Isabella María
        </h1>
        <p className="mt-4 text-[#182C52] font-['Cinzel'] uppercase tracking-widest">
          Mis XV Años
        </p>
      </div>
    </section>
  );
}

// Example 2: Card decoration with corner sparkles
export function DecoratedCard() {
  return (
    <div className="relative max-w-md mx-auto p-8 bg-white/75 backdrop-blur-sm rounded-3xl border border-[#D4AF37]/30 shadow-xl">
      {/* Corner sparkles */}
      <WatercolorSparkle variant={2} delay={0} top="5%" left="5%" size={16} />
      <WatercolorSparkle variant={4} delay={0.5} top="5%" left="90%" size={16} />
      <WatercolorSparkle variant={6} delay={1} top="90%" left="5%" size={16} />
      <WatercolorSparkle variant={8} delay={1.5} top="90%" left="90%" size={16} />

      {/* Card content */}
      <div className="text-center">
        <h3 className="text-2xl font-['Cinzel'] text-[#182C52] mb-4">
          Save the Date
        </h3>
        <p className="text-[#2E4A7F] font-['Bodoni_Moda']">
          March 15th, 2025
        </p>
      </div>
    </div>
  );
}

// Example 3: Butterflies following a path
export function ButterflyPath() {
  const pathPoints = [
    { top: '10%', left: '10%', variant: 1, size: 38 },
    { top: '20%', left: '25%', variant: 2, size: 36 },
    { top: '25%', left: '45%', variant: 3, size: 34 },
    { top: '22%', left: '65%', variant: 4, size: 40 },
    { top: '18%', left: '85%', variant: 5, size: 38 }
  ];

  return (
    <div className="relative h-64 bg-gradient-to-r from-[#F0F8FF] via-[#FFFEF9] to-[#F0F8FF] rounded-2xl overflow-hidden">
      {/* SVG path line (optional visual guide) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 10 10 Q 25 20, 45 25 Q 65 22, 85 18"
          stroke="#D4AF37"
          strokeWidth="0.2"
          fill="none"
          opacity="0.2"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Butterflies along the path */}
      {pathPoints.map((point, index) => (
        <WatercolorButterfly
          key={index}
          variant={point.variant}
          delay={index * 0.8}
          top={point.top}
          left={point.left}
          size={point.size}
          duration={4.5 + index * 0.2}
        />
      ))}
    </div>
  );
}

// Example 4: Sparkle constellation
export function SparkleConstellation() {
  const constellation = [
    { variant: 1, top: '20%', left: '30%', size: 16 },
    { variant: 2, top: '25%', left: '45%', size: 14 },
    { variant: 3, top: '30%', left: '35%', size: 18 },
    { variant: 4, top: '40%', left: '50%', size: 20 },
    { variant: 5, top: '35%', left: '60%', size: 16 },
    { variant: 6, top: '50%', left: '40%', size: 14 },
    { variant: 7, top: '45%', left: '55%', size: 18 }
  ];

  return (
    <div className="relative h-96 bg-[#182C52] rounded-2xl overflow-hidden">
      {/* Connection lines between sparkles (optional) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 30 20 L 45 25 L 35 30 L 50 40 L 60 35 L 40 50 L 55 45"
          stroke="#D4AF37"
          strokeWidth="0.1"
          fill="none"
          opacity="0.15"
        />
      </svg>

      {/* Sparkles */}
      {constellation.map((star, index) => (
        <WatercolorSparkle
          key={index}
          variant={star.variant}
          delay={index * 0.4}
          top={star.top}
          left={star.left}
          size={star.size}
        />
      ))}
    </div>
  );
}

// Example 5: Animated border decoration
export function AnimatedBorder() {
  return (
    <div className="relative max-w-lg mx-auto p-12 bg-gradient-to-br from-[#FFFEF9] to-[#F0F8FF] rounded-3xl">
      {/* Top border sparkles */}
      <div className="absolute top-0 left-0 right-0 h-8 flex justify-around items-center">
        {[1, 3, 5, 7, 9].map((variant, index) => (
          <WatercolorSparkle
            key={`top-${index}`}
            variant={variant}
            delay={index * 0.3}
            top="0"
            left={`${(index + 1) * 16}%`}
            size={12}
          />
        ))}
      </div>

      {/* Bottom border sparkles */}
      <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-around items-center">
        {[2, 4, 6, 8, 10].map((variant, index) => (
          <WatercolorSparkle
            key={`bottom-${index}`}
            variant={variant}
            delay={index * 0.3 + 1.5}
            top="100%"
            left={`${(index + 1) * 16}%`}
            size={12}
          />
        ))}
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="text-3xl font-['Great_Vibes'] text-[#D4AF37]">
          You&apos;re Invited
        </h2>
      </div>
    </div>
  );
}

// Example 6: Circle of butterflies
export function ButterflyCircle() {
  const radius = 45; // percentage
  const center = { x: 50, y: 50 }; // percentage
  const butterflies = 7;

  return (
    <div className="relative h-96 bg-gradient-to-br from-[#F0F8FF] to-[#FFFEF9] rounded-full overflow-hidden">
      {/* Center element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-32 h-32 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#D4AF37]/30 flex items-center justify-center">
          <p className="text-sm font-['Cinzel'] text-[#182C52] text-center">
            Isabella<br/>María
          </p>
        </div>
      </div>

      {/* Butterflies in circle */}
      {Array.from({ length: butterflies }).map((_, index) => {
        const angle = (index / butterflies) * 2 * Math.PI;
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);

        return (
          <WatercolorButterfly
            key={index}
            variant={(index % 7) + 1}
            delay={index * 0.6}
            top={`${y}%`}
            left={`${x}%`}
            size={36}
            duration={5 + index * 0.2}
          />
        );
      })}
    </div>
  );
}

// Example 7: Timeline with sparkles
export function TimelineWithSparkles() {
  const events = [
    { time: '5:00 PM', title: 'Ceremony' },
    { time: '6:30 PM', title: 'Cocktail Hour' },
    { time: '7:30 PM', title: 'Reception' },
    { time: '10:00 PM', title: 'Dance Party' }
  ];

  return (
    <div className="relative max-w-md mx-auto py-12">
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] opacity-30" />

      {/* Events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index} className="relative flex items-center justify-center">
            {/* Sparkle at timeline point */}
            <WatercolorSparkle
              variant={(index % 10) + 1}
              delay={index * 0.5}
              top="50%"
              left="50%"
              size={24}
            />

            {/* Event card */}
            <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-[200px]">
              <p className="text-sm text-[#D4AF37] font-['Cinzel'] uppercase tracking-wider mb-1">
                {event.time}
              </p>
              <p className="text-[#182C52] font-['Bodoni_Moda']">
                {event.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export all examples
export const WatercolorExamplesShowcase = {
  HeroWithWatercolor,
  DecoratedCard,
  ButterflyPath,
  SparkleConstellation,
  AnimatedBorder,
  ButterflyCircle,
  TimelineWithSparkles
};
