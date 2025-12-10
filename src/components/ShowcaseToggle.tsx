import { useState } from 'react';
import { WatercolorShowcase } from './WatercolorShowcase';

interface ShowcaseToggleProps {
  children: React.ReactNode;
}

/**
 * ShowcaseToggle - Component to switch between invitation and asset showcase
 * 
 * Usage: Wrap your main App component with this to enable showcase mode
 */
export function ShowcaseToggle({ children }: ShowcaseToggleProps) {
  const [showShowcase, setShowShowcase] = useState(false);

  return (
    <>
      {/* Toggle button - fixed in corner */}
      <button
        onClick={() => setShowShowcase(!showShowcase)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white text-sm font-['Cinzel'] uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        {showShowcase ? '← Back to Invitation' : 'View Assets Gallery →'}
      </button>

      {/* Content */}
      {showShowcase ? <WatercolorShowcase /> : children}
    </>
  );
}
