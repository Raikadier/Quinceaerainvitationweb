import { WatercolorSparkle } from './WatercolorSparkles';
import { WatercolorButterfly } from './WatercolorButterflies';

/**
 * WatercolorAssets - Complete collection of watercolor SVG elements
 * 
 * This component provides easy access to all 17 watercolor variations:
 * - 10 Gold Sparkle variants (12-24px)
 * - 7 Butterfly variants (32-48px)
 * 
 * Each variant uses advanced SVG filters to simulate watercolor painting:
 * - feTurbulence for organic texture
 * - feDisplacementMap for paint bleeding
 * - feGaussianBlur for soft edges
 * - Complex radial/linear gradients for depth
 */

interface WatercolorAssetsProps {
  showSparkles?: boolean;
  showButterflies?: boolean;
}

export function WatercolorAssets({ 
  showSparkles = true, 
  showButterflies = true 
}: WatercolorAssetsProps) {
  return (
    <>
      {/* GOLD SPARKLES - 10 variations scattered around hero */}
      {showSparkles && (
        <>
          <WatercolorSparkle variant={1} delay={0} top="15%" left="10%" size={20} />
          <WatercolorSparkle variant={2} delay={0.5} top="25%" left="85%" size={16} />
          <WatercolorSparkle variant={3} delay={1} top="35%" left="5%" size={18} />
          <WatercolorSparkle variant={4} delay={1.5} top="45%" left="90%" size={14} />
          <WatercolorSparkle variant={5} delay={2} top="55%" left="12%" size={22} />
          <WatercolorSparkle variant={6} delay={2.5} top="65%" left="88%" size={16} />
          <WatercolorSparkle variant={7} delay={3} top="75%" left="8%" size={18} />
          <WatercolorSparkle variant={8} delay={3.5} top="20%" left="50%" size={12} />
          <WatercolorSparkle variant={9} delay={4} top="70%" left="50%" size={24} />
          <WatercolorSparkle variant={10} delay={4.5} top="40%" left="50%" size={14} />
        </>
      )}

      {/* BUTTERFLIES - 7 variations floating elegantly */}
      {showButterflies && (
        <>
          <WatercolorButterfly variant={1} delay={0} top="10%" left="15%" size={40} duration={5} />
          <WatercolorButterfly variant={2} delay={0.8} top="20%" left="75%" size={36} duration={5.5} />
          <WatercolorButterfly variant={3} delay={1.6} top="35%" left="20%" size={32} duration={4.5} />
          <WatercolorButterfly variant={4} delay={2.4} top="50%" left="80%" size={44} duration={6} />
          <WatercolorButterfly variant={5} delay={3.2} top="65%" left="10%" size={38} duration={5.2} />
          <WatercolorButterfly variant={6} delay={4} top="75%" left="70%" size={34} duration={4.8} />
          <WatercolorButterfly variant={7} delay={4.8} top="85%" left="40%" size={42} duration={5.8} />
        </>
      )}
    </>
  );
}

// Export individual components for custom usage
export { WatercolorSparkle } from './WatercolorSparkles';
export { WatercolorButterfly } from './WatercolorButterflies';
