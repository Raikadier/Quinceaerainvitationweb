import { useState } from 'react';
import { WatercolorShowcase } from './WatercolorShowcase';
import { VariantComparison } from './VariantComparison';
import { 
  HeroWithWatercolor, 
  DecoratedCard, 
  ButterflyPath, 
  SparkleConstellation,
  AnimatedBorder,
  ButterflyCircle,
  TimelineWithSparkles
} from './WatercolorExamples';

/**
 * FullShowcase - Complete demonstration of all watercolor assets and usage examples
 */

type ShowcaseView = 'gallery' | 'comparison' | 'examples' | 'all';

export function FullShowcase() {
  const [view, setView] = useState<ShowcaseView>('gallery');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F8FF] to-[#FFFEF9]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-2xl font-['Great_Vibes'] bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
              Watercolor Assets
            </h1>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setView('gallery')}
                className={`px-4 py-2 rounded-full font-['Cinzel'] text-sm uppercase tracking-wider transition-all duration-300 ${
                  view === 'gallery'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white shadow-lg'
                    : 'bg-white/50 text-[#2E4A7F] hover:bg-white/80'
                }`}
              >
                Gallery
              </button>

              <button
                onClick={() => setView('comparison')}
                className={`px-4 py-2 rounded-full font-['Cinzel'] text-sm uppercase tracking-wider transition-all duration-300 ${
                  view === 'comparison'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white shadow-lg'
                    : 'bg-white/50 text-[#2E4A7F] hover:bg-white/80'
                }`}
              >
                Compare
              </button>
              
              <button
                onClick={() => setView('examples')}
                className={`px-4 py-2 rounded-full font-['Cinzel'] text-sm uppercase tracking-wider transition-all duration-300 ${
                  view === 'examples'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white shadow-lg'
                    : 'bg-white/50 text-[#2E4A7F] hover:bg-white/80'
                }`}
              >
                Examples
              </button>

              <button
                onClick={() => setView('all')}
                className={`px-4 py-2 rounded-full font-['Cinzel'] text-sm uppercase tracking-wider transition-all duration-300 ${
                  view === 'all'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white shadow-lg'
                    : 'bg-white/50 text-[#2E4A7F] hover:bg-white/80'
                }`}
              >
                All
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Gallery View */}
        {(view === 'gallery' || view === 'all') && (
          <WatercolorShowcase />
        )}

        {/* Comparison View */}
        {(view === 'comparison' || view === 'all') && (
          <div className={view === 'all' ? 'mt-16' : ''}>
            <VariantComparison />
          </div>
        )}

        {/* Examples View */}
        {(view === 'examples' || view === 'all') && (
          <div className={view === 'all' ? 'mt-16' : ''}>
            <div className="text-center mb-12">
              <h2 className="text-5xl font-['Great_Vibes'] bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent mb-2">
                Usage Examples
              </h2>
              <p className="text-[#2E4A7F] font-['Bodoni_Moda']">
                7 different ways to use watercolor assets in your designs
              </p>
            </div>

            <div className="space-y-16">
              {/* Example 1: Hero with Watercolor */}
              <ExampleSection
                title="1. Hero Section with Scattered Elements"
                description="Sparkles and butterflies floating around the main title"
              >
                <HeroWithWatercolor />
              </ExampleSection>

              {/* Example 2: Decorated Card */}
              <ExampleSection
                title="2. Card Decoration with Corner Sparkles"
                description="Subtle sparkles in the corners of a glassmorphic card"
              >
                <DecoratedCard />
              </ExampleSection>

              {/* Example 3: Butterfly Path */}
              <ExampleSection
                title="3. Butterflies Following a Path"
                description="Butterflies arranged along a curved path"
              >
                <ButterflyPath />
              </ExampleSection>

              {/* Example 4: Sparkle Constellation */}
              <ExampleSection
                title="4. Sparkle Constellation"
                description="Sparkles arranged like stars in the night sky"
              >
                <SparkleConstellation />
              </ExampleSection>

              {/* Example 5: Animated Border */}
              <ExampleSection
                title="5. Animated Border Decoration"
                description="Sparkles creating an animated border effect"
              >
                <AnimatedBorder />
              </ExampleSection>

              {/* Example 6: Butterfly Circle */}
              <ExampleSection
                title="6. Circle of Butterflies"
                description="Butterflies arranged in a circular pattern"
              >
                <ButterflyCircle />
              </ExampleSection>

              {/* Example 7: Timeline */}
              <ExampleSection
                title="7. Timeline with Sparkles"
                description="Sparkles marking events on a vertical timeline"
              >
                <TimelineWithSparkles />
              </ExampleSection>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-[#D4AF37]/20 text-center">
        <p className="text-2xl font-['Great_Vibes'] text-[#D4AF37] opacity-80 italic mb-2">
          &ldquo;Every princess deserves her fairytale moment&rdquo;
        </p>
        <p className="text-sm text-[#2E4A7F]/70 font-['Bodoni_Moda']">
          Created for Isabella María&apos;s XV Años • March 15th, 2025
        </p>
      </footer>
    </div>
  );
}

// Helper component for example sections
function ExampleSection({ 
  title, 
  description, 
  children 
}: { 
  title: string; 
  description: string; 
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-['Cinzel'] text-[#182C52] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#2E4A7F] font-['Bodoni_Moda'] opacity-80">
          {description}
        </p>
      </div>
      
      <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-[#D4AF37]/20 shadow-lg">
        {children}
      </div>

      {/* Code hint */}
      <details className="bg-[#182C52]/5 rounded-xl p-4 text-sm">
        <summary className="cursor-pointer font-['Cinzel'] text-[#182C52] uppercase tracking-wide text-xs">
          View Implementation Hint
        </summary>
        <div className="mt-4 text-[#2E4A7F] font-['Bodoni_Moda'] text-xs">
          <p className="mb-2 opacity-70">
            Check <code className="bg-[#182C52]/10 px-2 py-0.5 rounded">/components/WatercolorExamples.tsx</code> for the full implementation.
          </p>
        </div>
      </details>
    </section>
  );
}