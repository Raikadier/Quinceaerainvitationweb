import { useState } from 'react';
import { WatercolorSparkle } from './WatercolorSparkles';
import { WatercolorButterfly } from './WatercolorButterflies';

/**
 * VariantComparison - Interactive side-by-side comparison tool
 * 
 * Allows users to compare different variants of sparkles and butterflies
 * to choose the best ones for their design.
 */

export function VariantComparison() {
  const [selectedSparkles, setSelectedSparkles] = useState<number[]>([1, 5, 9]);
  const [selectedButterflies, setSelectedButterflies] = useState<number[]>([1, 4, 7]);
  const [showLabels, setShowLabels] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F8FF] to-[#FFFEF9] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-['Great_Vibes'] bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent mb-2">
            Variant Comparison Tool
          </h1>
          <p className="text-[#2E4A7F] font-['Bodoni_Moda'] mb-6">
            Select and compare variants side-by-side
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setShowLabels(!showLabels)}
              className={`px-4 py-2 rounded-full text-sm font-['Cinzel'] uppercase tracking-wider transition-all duration-300 ${
                showLabels
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white'
                  : 'bg-white/50 text-[#2E4A7F]'
              }`}
            >
              {showLabels ? 'Hide Labels' : 'Show Labels'}
            </button>
          </div>
        </div>

        {/* SPARKLES COMPARISON */}
        <section className="mb-16">
          <h2 className="text-3xl font-['Cinzel'] text-[#182C52] text-center mb-8 uppercase tracking-wider">
            Gold Sparkles Comparison
          </h2>

          {/* Selection Grid */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((variant) => (
              <button
                key={variant}
                onClick={() => {
                  if (selectedSparkles.includes(variant)) {
                    setSelectedSparkles(selectedSparkles.filter(v => v !== variant));
                  } else if (selectedSparkles.length < 5) {
                    setSelectedSparkles([...selectedSparkles, variant]);
                  }
                }}
                className={`w-12 h-12 rounded-lg font-['Cinzel'] text-sm transition-all duration-300 ${
                  selectedSparkles.includes(variant)
                    ? 'bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] text-white shadow-lg scale-110'
                    : 'bg-white/50 text-[#2E4A7F] hover:bg-white/80'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-[#2E4A7F]/70 font-['Bodoni_Moda'] mb-8">
            Click to select up to 5 variants • Currently selected: {selectedSparkles.length}/5
          </p>

          {/* Comparison Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {selectedSparkles.map((variant) => (
              <div
                key={variant}
                className="relative bg-white/75 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/30 shadow-lg"
              >
                {showLabels && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#182C52] rounded-full">
                    <span className="text-xs font-['Cinzel'] text-white uppercase">
                      Variant {variant}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-center h-40 relative">
                  <WatercolorSparkle
                    variant={variant}
                    delay={0}
                    top="50%"
                    left="50%"
                    size={24}
                  />
                </div>

                {showLabels && (
                  <div className="text-center mt-4">
                    <p className="text-xs text-[#2E4A7F] font-['Bodoni_Moda']">
                      {getSparkleDescription(variant)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedSparkles.length === 0 && (
            <div className="text-center py-12 text-[#2E4A7F]/50 font-['Bodoni_Moda']">
              Select variants above to compare
            </div>
          )}
        </section>

        {/* BUTTERFLIES COMPARISON */}
        <section>
          <h2 className="text-3xl font-['Cinzel'] text-[#182C52] text-center mb-8 uppercase tracking-wider">
            Watercolor Butterflies Comparison
          </h2>

          {/* Selection Grid */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((variant) => (
              <button
                key={variant}
                onClick={() => {
                  if (selectedButterflies.includes(variant)) {
                    setSelectedButterflies(selectedButterflies.filter(v => v !== variant));
                  } else if (selectedButterflies.length < 4) {
                    setSelectedButterflies([...selectedButterflies, variant]);
                  }
                }}
                className={`w-12 h-12 rounded-lg font-['Cinzel'] text-sm transition-all duration-300 ${
                  selectedButterflies.includes(variant)
                    ? 'bg-gradient-to-br from-[#2E4A7F] to-[#4169E1] text-white shadow-lg scale-110'
                    : 'bg-white/50 text-[#2E4A7F] hover:bg-white/80'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-[#2E4A7F]/70 font-['Bodoni_Moda'] mb-8">
            Click to select up to 4 variants • Currently selected: {selectedButterflies.length}/4
          </p>

          {/* Comparison Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectedButterflies.map((variant) => (
              <div
                key={variant}
                className="relative bg-white/75 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/30 shadow-lg"
              >
                {showLabels && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#182C52] rounded-full">
                    <span className="text-xs font-['Cinzel'] text-white uppercase">
                      Variant {variant}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-center h-48 relative">
                  <WatercolorButterfly
                    variant={variant}
                    delay={0}
                    top="50%"
                    left="50%"
                    size={getButterflySize(variant)}
                    duration={5}
                  />
                </div>

                {showLabels && (
                  <div className="text-center mt-4">
                    <p className="text-xs text-[#2E4A7F] font-['Bodoni_Moda'] mb-1">
                      {getButterflyDescription(variant)}
                    </p>
                    <p className="text-xs text-[#D4AF37] font-['Bodoni_Moda']">
                      Size: {getButterflySize(variant)}px
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedButterflies.length === 0 && (
            <div className="text-center py-12 text-[#2E4A7F]/50 font-['Bodoni_Moda']">
              Select variants above to compare
            </div>
          )}
        </section>

        {/* Export Code Section */}
        {(selectedSparkles.length > 0 || selectedButterflies.length > 0) && (
          <section className="mt-16 bg-[#182C52] text-white rounded-3xl p-8">
            <h3 className="text-2xl font-['Cinzel'] mb-6 text-center uppercase tracking-wide">
              Your Selected Code
            </h3>

            <div className="bg-black/30 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-green-300">
{`// Selected Sparkles (${selectedSparkles.length})`}
{selectedSparkles.map((v, i) => 
`<WatercolorSparkle variant={${v}} delay={${i * 0.5}} top="20%" left="${10 + i * 15}%" size={18} />`
).join('\n')}

{selectedButterflies.length > 0 && `
// Selected Butterflies (${selectedButterflies.length})`}
{selectedButterflies.map((v, i) => 
`<WatercolorButterfly variant={${v}} delay={${i * 0.8}} top="30%" left="${15 + i * 20}%" size={${getButterflySize(v)}} />`
).join('\n')}
              </pre>
            </div>

            <p className="text-center text-sm opacity-70 mt-4 font-['Bodoni_Moda']">
              Copy this code and paste it into your component
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

// Helper functions
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
