import { motion } from 'motion/react';
import { Crown, ChevronDown, Mail, Gift, Shirt } from 'lucide-react';
import { CornerFloral } from './components/CornerFloral';
import { WatercolorButterfly } from './components/WatercolorButterflies';
import { WatercolorSparkle } from './components/WatercolorSparkles';
import { EventCard } from './components/EventCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F8FF] via-[#FFFEF9] to-[#F0F8FF] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-16">
        {/* Fixed watercolor castle background */}
        <div 
          className="fixed inset-0 z-0 bg-center bg-cover opacity-[0.12]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1664269095852-66ab5ce0cf5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWlyeXRhbGUlMjBjYXN0bGUlMjB3YXRlcmNvbG9yJTIwYmx1ZXxlbnwxfHx8fDE3NjUzMTkyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Floating gold crown */}
        <motion.div
          className="relative z-10 mb-8"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Crown className="w-16 h-16 text-[#D4AF37]" fill="#D4AF37" />
        </motion.div>

        {/* Decorative gold arch */}
        <div className="relative z-10 mb-6">
          <svg width="280" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 10 70 Q 10 30 40 15 Q 80 0 140 0 Q 200 0 240 15 Q 270 30 270 70"
              stroke="url(#archGold)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 15 68 Q 15 32 42 18 Q 80 5 140 5 Q 200 5 238 18 Q 265 32 265 68"
              stroke="url(#archGold)"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F4D03F" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center mb-4"
        >
          <h1 className="text-6xl md:text-7xl px-4">Isabella María</h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-10 text-center mb-12"
        >
          <h3 className="text-[#182C52] tracking-widest">Mis XV Años</h3>
        </motion.div>

        {/* Floating butterflies around the name */}
        <WatercolorButterfly delay={0} top="25%" left="10%" duration={5} />
        <WatercolorButterfly delay={0.5} top="30%" left="85%" duration={4.5} />
        <WatercolorButterfly delay={1} top="45%" left="15%" duration={4} />
        <WatercolorButterfly delay={1.5} top="40%" left="80%" duration={5.5} />
        <WatercolorButterfly delay={2} top="55%" left="50%" duration={4.8} />
        <WatercolorButterfly delay={0.8} top="35%" left="50%" duration={5.2} />
        <WatercolorButterfly delay={1.8} top="50%" left="25%" duration={4.3} />

        {/* Gold sparkles */}
        <WatercolorSparkle delay={0} top="20%" left="20%" size={12} />
        <WatercolorSparkle delay={1} top="25%" left="75%" size={16} />
        <WatercolorSparkle delay={0.5} top="48%" left="12%" size={14} />
        <WatercolorSparkle delay={1.5} top="52%" left="88%" size={12} />
        <WatercolorSparkle delay={2} top="60%" left="45%" size={18} />
        <WatercolorSparkle delay={0.7} top="38%" left="35%" size={10} />
        <WatercolorSparkle delay={1.2} top="42%" left="65%" size={13} />
        <WatercolorSparkle delay={1.8} top="32%" left="55%" size={15} />

        {/* Scroll indicator */}
        <motion.div
          className="relative z-10 mt-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="relative max-w-md mx-auto px-6 pb-12">
        {/* Main card with gradient background */}
        <div className="relative rounded-3xl p-8 bg-gradient-to-b from-[#FFFEF9] to-[#F0F8FF] shadow-2xl">
          {/* Corner florals */}
          <CornerFloral position="top-left" />
          <CornerFloral position="top-right" />
          <CornerFloral position="bottom-left" />
          <CornerFloral position="bottom-right" />

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glassmorphic rounded-2xl p-8 mb-12"
          >
            <p className="text-[#182C52] italic text-center leading-relaxed">
              Once upon a time, a young princess dreamed of her perfect celebration. Now, that dream becomes reality as Isabella María celebrates her quinceañera surrounded by family, friends, and the magic of this unforgettable moment.
            </p>
          </motion.div>

          {/* Blue roses divider */}
          <div className="relative h-32 mb-12 overflow-hidden rounded-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1758922565071-014462d53878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwcm9zZXMlMjBoeWRyYW5nZWFzfGVufDF8fHx8MTc2NTMxOTI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFEF9] via-transparent to-[#F0F8FF]" />
          </div>

          {/* Save the Date Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 mb-12 text-center bg-gradient-to-r from-[#182C52] via-[#2E4A7F] to-[#182C52]"
          >
            <p className="gold-text text-sm uppercase tracking-widest mb-2">Save the Date</p>
            <p className="text-white text-2xl">Saturday, March 15th, 2025</p>
          </motion.div>

          {/* Event Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12 space-y-8"
          >
            <h3 className="text-center gold-text mb-8">Celebration Details</h3>
            
            {/* Timeline connector */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 gold-gradient transform -translate-x-1/2 opacity-30" />
              
              <div className="space-y-8">
                <EventCard
                  type="ceremony"
                  time="5:00 PM"
                  location="St. Mary's Cathedral"
                  address="123 Grace Avenue, Downtown"
                  mapUrl="https://maps.google.com"
                />
                
                <EventCard
                  type="reception"
                  time="7:00 PM"
                  location="The Grand Ballroom"
                  address="456 Royal Boulevard, City Center"
                  mapUrl="https://maps.google.com"
                />
              </div>
            </div>
          </motion.div>

          {/* Hydrangea divider */}
          <div className="relative h-32 mb-12 overflow-hidden rounded-xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1629379555555-79c361b3736b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwaHlkcmFuZ2VhJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjUzMTkyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0F8FF] via-transparent to-[#FFFEF9]" />
          </div>

          {/* Dress Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glassmorphic rounded-2xl p-8 mb-12 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
              <Shirt className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-[#182C52] mb-3 uppercase tracking-wider">Dress Code</h4>
            <p className="text-[#2E4A7F] mb-2">Formal Attire</p>
            <p className="text-sm gold-text">Royal Blue Tie Encouraged</p>
          </motion.div>

          {/* Gifts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-center gold-text mb-8">Gifts</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Lluvia de Sobres */}
              <div className="glassmorphic rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[#182C52] mb-2">Lluvia de Sobres</h4>
                <p className="text-sm text-[#2E4A7F]">Your presence is the greatest gift</p>
              </div>

              {/* Mesa de Regalos */}
              <div className="glassmorphic rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[#182C52] mb-2">Mesa de Regalos</h4>
                <p className="text-sm text-[#2E4A7F]">Amazon & Target</p>
              </div>
            </div>
          </motion.div>

          {/* RSVP Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-[#182C52] mb-8">We hope to see you there!</h2>
            
            <button className="px-12 py-4 rounded-full gold-gradient text-white uppercase tracking-wider shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              RSVP Now
            </button>
            
            <p className="text-sm text-[#2E4A7F] mt-6">Please respond by February 28th, 2025</p>
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center pt-8 border-t border-[#D4AF37] border-opacity-30"
          >
            <p className="script-text text-2xl gold-text opacity-80 italic">
              "Every princess deserves her fairytale moment"
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}