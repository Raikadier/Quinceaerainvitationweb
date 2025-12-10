import { WatercolorSparkle } from './WatercolorSparkles';
import { WatercolorButterfly } from './WatercolorButterflies';

/**
 * WatercolorShowcase - Visual gallery of all SVG variants
 * 
 * This component displays all 17 variations in a grid layout
 * for easy preview and selection.
 */

export function WatercolorShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F8FF] to-[#FFFEF9] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-['Great_Vibes'] bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent mb-2">
            Watercolor Assets Gallery
          </h1>
          <p className="text-[#2E4A7F] font-['Bodoni_Moda']">
            17 hand-painted SVG variations for Isabella María&apos;s Quinceañera
          </p>
        </div>

        {/* GOLD SPARKLES SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-['Cinzel'] text-[#182C52] text-center mb-8 uppercase tracking-wider">
            Gold Sparkles
            <span className="block text-sm text-[#D4AF37] mt-2 normal-case tracking-normal">
              10 Variations · 12-24px · 4-pointed stars
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((variant) => (
              <div 
                key={variant}
                className="relative bg-white/75 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/30 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-2 left-2 text-xs font-['Cinzel'] text-[#182C52] uppercase">
                  Variant {variant}
                </div>
                
                <div className="flex items-center justify-center h-32 relative">
                  <WatercolorSparkle 
                    variant={variant}
                    delay={variant * 0.3}
                    top="50%"
                    left="50%"
                    size={variant % 2 === 0 ? 24 : 20}
                  />
                </div>

                <div className="text-center mt-4 text-xs text-[#2E4A7F] font-['Bodoni_Moda']">
                  {getSparkleDescription(variant)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BUTTERFLIES SECTION */}
        <section>
          <h2 className="text-3xl font-['Cinzel'] text-[#182C52] text-center mb-8 uppercase tracking-wider">
            Watercolor Butterflies
            <span className="block text-sm text-[#D4AF37] mt-2 normal-case tracking-normal">
              7 Variations · 32-48px · Royal blue wings + gold body
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((variant) => (
              <div 
                key={variant}
                className="relative bg-white/75 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/30 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-2 left-2 text-xs font-['Cinzel'] text-[#182C52] uppercase">
                  Variant {variant}
                </div>
                
                <div className="flex items-center justify-center h-40 relative">
                  <WatercolorButterfly 
                    variant={variant}
                    delay={variant * 0.5}
                    top="50%"
                    left="50%"
                    size={getButterflySize(variant)}
                    duration={4 + variant * 0.3}
                  />
                </div>

                <div className="text-center mt-4 text-xs text-[#2E4A7F] font-['Bodoni_Moda']">
                  {getButterflyDescription(variant)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Details */}
        <section className="mt-16 bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-[#D4AF37]/20">
          <h3 className="text-2xl font-['Cinzel'] text-[#182C52] mb-4 text-center uppercase tracking-wide">
            Technical Features
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm text-[#2E4A7F] font-['Bodoni_Moda']">
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold mb-1">Watercolor Filters</div>
              <div className="text-xs opacity-80">
                feTurbulence + feDisplacementMap + feGaussianBlur
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-semibold mb-1">Complex Gradients</div>
              <div className="text-xs opacity-80">
                Radial & Linear with 4-5 color stops
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-2">🎬</div>
              <div className="font-semibold mb-1">Smooth Animations</div>
              <div className="text-xs opacity-80">
                Motion/React with ease-in-out transitions
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#D4AF37]/20 text-center">
            <p className="text-xs text-[#2E4A7F]/70 font-['Bodoni_Moda'] italic">
              All SVGs are optimized for performance with reusable defs and efficient filters
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-['Great_Vibes'] text-[#D4AF37] opacity-80 italic">
            &ldquo;Every princess deserves her fairytale moment&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper functions for descriptions
function getSparkleDescription(variant: number): string {
  const descriptions = [
    'Classic balanced',
    'Wide with blur',
    'Sharp & crisp',
    'Soft rounded',
    'Asymmetric art',
    'Diamond-like',
    'Elongated',
    'Compact small',
    'Wide cross',
    'Delicate thin'
  ];
  return descriptions[variant - 1] || 'Custom';
}

function getButterflyDescription(variant: number): string {
  const descriptions = [
    'Classic monarch',
    'Wide delicate',
    'Compact round',
    'Elegant long',
    'Asymmetric',
    'Small delicate',
    'Dramatic spread'
  ];
  return descriptions[variant - 1] || 'Custom';
}

function getButterflySize(variant: number): number {
  const sizes = [40, 36, 32, 44, 38, 34, 42];
  return sizes[variant - 1] || 40;
}
