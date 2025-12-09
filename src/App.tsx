import React, { useState } from 'react';
import { CornerFloral } from './components/CornerFloral';
import { FloatingButterfly } from './components/FloatingButterfly';
import { EventCard } from './components/EventCard';
import { Crown, Church, Wine, Shirt, Sparkles } from 'lucide-react';

export default function App() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleRSVP = () => {
    setRsvpSubmitted(true);
    setTimeout(() => setRsvpSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F0F8FF] relative overflow-hidden">
      {/* Castle Background */}
      <div 
        className="fixed inset-0 opacity-[0.15] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1763986998396-12268a3e7a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN0bGUlMjBmYWlyeXRhbGUlMjB0b3dlcnxlbnwxfHx8fDE3NjUxMjcxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          filter: 'sepia(0.3)',
        }}
      />

      {/* Main Container */}
      <div className="relative max-w-md mx-auto px-4 py-8">
        {/* Decorative Corners */}
        <div className="relative bg-gradient-to-b from-[#FFFEF9] to-[#F0F8FF] rounded-3xl shadow-2xl overflow-hidden">
          <CornerFloral position="top-left" />
          <CornerFloral position="top-right" />
          <CornerFloral position="bottom-left" />
          <CornerFloral position="bottom-right" />

          <div className="relative z-10 p-8 space-y-12">
            {/* Hero Section */}
            <section className="relative text-center space-y-6">
              {/* Floating Butterflies */}
              <FloatingButterfly delay={0} startX={10} startY={20} />
              <FloatingButterfly delay={1} startX={85} startY={30} />
              <FloatingButterfly delay={2} startX={50} startY={10} />
              <FloatingButterfly delay={1.5} startX={20} startY={50} />
              <FloatingButterfly delay={0.5} startX={75} startY={15} />

              {/* Crown Icon */}
              <div className="flex justify-center">
                <Crown className="w-12 h-12 text-[#D4AF37]" />
              </div>

              {/* Golden Arch */}
              <div className="relative">
                <svg
                  className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-64 h-32"
                  viewBox="0 0 256 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 100 Q128 20 236 100"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#F4D03F" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Name */}
                <h1 
                  className="mt-8 mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Isabella María
                </h1>
              </div>

              {/* Mis XV */}
              <h2 
                className="mt-2"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Mis XV Años
              </h2>

              {/* Decorative line */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
              </div>
            </section>

            {/* The Story Section */}
            <section className="text-center space-y-4 px-4">
              <div className="inline-block">
                <p className="text-[#182C52] italic leading-relaxed">
                  Once upon a time, a young princess prepared to celebrate the most magical chapter of her life. 
                  You are cordially invited to witness this fairytale moment as she steps into her royal dream.
                </p>
              </div>
            </section>

            {/* Floral Divider with Image */}
            <div className="relative h-32 rounded-lg overflow-hidden my-8">
              <img
                src="https://images.unsplash.com/photo-1667927772655-3fb23663709e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3lhbCUyMGJsdWUlMjByb3NlcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjUxMjcxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Royal Blue Roses"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0F8FF] via-transparent to-[#F0F8FF]"></div>
            </div>

            {/* Event Details */}
            <section className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-[#182C52]">Celebration Details</h3>
                <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-3"></div>
              </div>

              <div className="grid gap-6">
                <EventCard
                  icon={Church}
                  title="Ceremony"
                  location="St. Mary's Cathedral"
                  time="4:00 PM"
                  address="123 Royal Avenue, Downtown"
                />

                <EventCard
                  icon={Wine}
                  title="Reception"
                  location="Grand Ballroom"
                  time="6:00 PM"
                  address="The Royal Palace Hotel"
                />
              </div>
            </section>

            {/* Date Banner */}
            <div className="bg-gradient-to-r from-[#182C52] to-[#2E4A7F] rounded-xl p-6 text-center shadow-lg">
              <p className="text-[#D4AF37] mb-2">Save the Date</p>
              <p className="text-white text-xl">Saturday, March 15th, 2025</p>
            </div>

            {/* Dress Code */}
            <section className="bg-[#FFFEF9] rounded-xl p-6 border border-[#D4AF37]/30 shadow-md">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] flex items-center justify-center">
                    <Shirt className="w-7 h-7 text-[#182C52]" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#182C52] mb-2">Dress Code</h3>
                  <p className="text-[#182C52] opacity-90">Formal Attire</p>
                  <p className="text-[#182C52] opacity-75 text-sm mt-1">Royal Blue Tie Encouraged</p>
                </div>
              </div>
            </section>

            {/* Hydrangea Image */}
            <div className="relative h-24 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629379555555-79c361b3736b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwaHlkcmFuZ2VhJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjUxMjI3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Blue Hydrangeas"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0F8FF] via-transparent to-[#F0F8FF]"></div>
            </div>

            {/* RSVP Section */}
            <section className="text-center space-y-4">
              <h3 className="text-[#182C52]">We hope to see you there!</h3>
              
              <button
                onClick={handleRSVP}
                className="w-full bg-gradient-to-r from-[#182C52] to-[#2E4A7F] text-[#D4AF37] py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {rsvpSubmitted ? '✓ Thank You!' : 'Confirm Attendance'}
              </button>

              <p className="text-[#182C52] opacity-75 text-sm">
                Please RSVP by February 28th, 2025
              </p>
            </section>

            {/* Footer Message */}
            <div className="text-center pt-6 border-t border-[#D4AF37]/20">
              <p className="text-[#182C52] opacity-60 text-sm italic">
                "Every princess deserves her fairytale moment"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
