import { Church, Wine, MapPin } from 'lucide-react';

interface EventCardProps {
  type: 'ceremony' | 'reception';
  time: string;
  location: string;
  address: string;
  mapUrl?: string;
}

export function EventCard({ type, time, location, address, mapUrl }: EventCardProps) {
  const Icon = type === 'ceremony' ? Church : Wine;
  const title = type === 'ceremony' ? 'Ceremony' : 'Reception';

  return (
    <div className="relative glassmorphic rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
      {/* Baroque corner ornaments */}
      <div className="absolute top-0 left-0 w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 8 0 Q 4 4 0 8 Z" fill="url(#cornerGold)" />
          <defs>
            <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F4D03F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-6 h-6 scale-x-[-1]">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 8 0 Q 4 4 0 8 Z" fill="url(#cornerGold2)" />
          <defs>
            <linearGradient id="cornerGold2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F4D03F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-6 h-6 scale-y-[-1]">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 8 0 Q 4 4 0 8 Z" fill="url(#cornerGold3)" />
          <defs>
            <linearGradient id="cornerGold3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F4D03F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6 scale-x-[-1] scale-y-[-1]">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 L 8 0 Q 4 4 0 8 Z" fill="url(#cornerGold4)" />
          <defs>
            <linearGradient id="cornerGold4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F4D03F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h4 className="text-[#182C52] uppercase tracking-wider">{title}</h4>

        {/* Time */}
        <p className="text-[#2E4A7F]">{time}</p>

        {/* Location */}
        <div className="space-y-1">
          <p className="font-semibold text-[#182C52]">{location}</p>
          <p className="text-sm text-[#2E4A7F] opacity-90">{address}</p>
        </div>

        {/* Map Button */}
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#182C52] text-white hover:bg-[#2E4A7F] transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-4 h-4" />
            View Map
          </a>
        )}
      </div>
    </div>
  );
}
