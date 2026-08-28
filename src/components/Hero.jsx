import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export default function Hero({ 
  bride = "Wendy", 
  groom = "Nicolas", 
  date = "14 / OCT / 2026",
  isPlaying,
  togglePlay,
  bgImage = "https://res.cloudinary.com/de7zfuasb/image/upload/v1787860838/36dbc005-bfb2-4964-a892-08c63f674601.png" 
}) {
  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden p-[clamp(1rem,5vw,3rem)] text-white">
      <div 
        className="absolute inset-0 bg-cover bg-[45%_35%] bg-no-repeat sm:bg-center lg:bg-[center_35%]"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      <div className="relative z-10 mt-auto mb-20 self-start sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4 inline-block max-w-full rounded-full border border-white/40 bg-black/20 px-4 py-1 text-[clamp(0.6rem,2.2vw,0.6875rem)] uppercase tracking-wider text-white/90 backdrop-blur-xs">
            Boda De {groom} Y {bride}
          </div>

          <h1 className="mb-4 max-w-full font-serif text-[clamp(3rem,13vw,4.5rem)] font-light leading-none tracking-wide drop-shadow-sm">
            {bride} <br />
            <span className="font-serif italic font-normal">&</span> {groom}
          </h1>

          <p className="max-w-full text-[clamp(0.625rem,2.5vw,0.875rem)] font-light uppercase tracking-[0.18em] text-white/80 sm:tracking-[0.25em]">
            {date}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-[clamp(1rem,5vw,3rem)] left-1/2 z-10 -translate-x-1/2 pb-[env(safe-area-inset-bottom)]">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-[#626e57]/90 hover:bg-[#626e57] text-white flex items-center justify-center backdrop-blur-xs shadow-lg transition-transform active:scale-90 cursor-pointer"
          aria-label="Reproducir música"
        >
          {isPlaying ? (
            <Pause size={18} fill="currentColor" />
          ) : (
            <Play size={18} fill="currentColor" className="ml-0.5" />
          )}
        </motion.button>
      </div>
    </section>
  );
}