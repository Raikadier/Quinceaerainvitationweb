import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  icon: LucideIcon;
  title: string;
  location: string;
  time: string;
  address: string;
}

export const EventCard: React.FC<EventCardProps> = ({ 
  icon: Icon, 
  title, 
  location, 
  time, 
  address 
}) => {
  return (
    <div className="relative bg-[#FFFEF9] rounded-lg p-6 border-2 border-[#D4AF37] shadow-lg">
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br-lg"></div>
      
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center shadow-md">
          <Icon className="w-6 h-6 text-[#182C52]" />
        </div>
        
        <h3 className="text-[#182C52]">{title}</h3>
        
        <div className="space-y-1 text-[#182C52]">
          <p className="opacity-90">{location}</p>
          <p className="opacity-75">{time}</p>
          <p className="opacity-75 text-sm">{address}</p>
        </div>
      </div>
    </div>
  );
};
