interface CornerFloralProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function CornerFloral({ position }: CornerFloralProps) {
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-0 left-0';
      case 'top-right':
        return 'top-0 right-0 scale-x-[-1]';
      case 'bottom-left':
        return 'bottom-0 left-0 scale-y-[-1]';
      case 'bottom-right':
        return 'bottom-0 right-0 scale-x-[-1] scale-y-[-1]';
    }
  };

  return (
    <div className={`absolute ${getPositionClasses()} w-32 h-32 pointer-events-none opacity-90`}>
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Baroque gold filigree curves */}
        <path
          d="M 0 0 Q 15 15 25 30 Q 30 35 28 40 Q 26 45 20 48 Q 15 50 10 45 Q 5 40 8 35 Q 12 28 18 24"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M 0 0 Q 20 10 35 20 Q 42 24 45 30 Q 47 35 43 40 Q 38 44 32 42 Q 25 39 22 33"
          stroke="url(#goldGradient)"
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M 0 5 Q 10 12 18 20 Q 22 25 20 30 Q 18 34 14 35"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
        
        {/* Ornamental swirls */}
        <path
          d="M 5 0 Q 8 5 10 10 Q 12 15 10 18 Q 8 20 6 18"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 15 5 Q 18 10 20 15 Q 21 18 19 20"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
        />

        {/* Blue roses - concentric circles */}
        {/* Rose 1 */}
        <circle cx="20" cy="35" r="8" fill="#182C52" opacity="0.9" />
        <circle cx="20" cy="35" r="6" fill="#2E4A7F" opacity="0.85" />
        <circle cx="20" cy="35" r="4" fill="#4169E1" opacity="0.8" />
        <circle cx="20" cy="35" r="2" fill="#D4AF37" opacity="0.9" />

        {/* Rose 2 */}
        <circle cx="38" cy="22" r="7" fill="#182C52" opacity="0.85" />
        <circle cx="38" cy="22" r="5" fill="#2E4A7F" opacity="0.8" />
        <circle cx="38" cy="22" r="3" fill="#4169E1" opacity="0.75" />
        <circle cx="38" cy="22" r="1.5" fill="#D4AF37" opacity="0.9" />

        {/* Hydrangea clusters - small circles grouped */}
        <circle cx="28" cy="28" r="3" fill="#4169E1" opacity="0.7" />
        <circle cx="32" cy="30" r="2.5" fill="#2E4A7F" opacity="0.7" />
        <circle cx="30" cy="33" r="2.5" fill="#4169E1" opacity="0.65" />
        <circle cx="26" cy="32" r="2" fill="#182C52" opacity="0.6" />

        {/* Small hydrangea cluster 2 */}
        <circle cx="45" cy="32" r="2.5" fill="#4169E1" opacity="0.65" />
        <circle cx="48" cy="34" r="2" fill="#2E4A7F" opacity="0.65" />
        <circle cx="46" cy="36" r="2" fill="#182C52" opacity="0.6" />

        {/* Gold leaf accents */}
        <ellipse cx="12" cy="25" rx="4" ry="2" fill="url(#goldGradient)" opacity="0.8" transform="rotate(-45 12 25)" />
        <ellipse cx="30" cy="18" rx="3.5" ry="1.8" fill="url(#goldGradient)" opacity="0.75" transform="rotate(-30 30 18)" />
        <ellipse cx="42" cy="28" rx="3" ry="1.5" fill="url(#goldGradient)" opacity="0.7" transform="rotate(-60 42 28)" />

        {/* Gold gradient definition */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F4D03F" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
