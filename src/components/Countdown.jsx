import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({
  targetDate = "2026-11-28T00:00:00",
  bgImage = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
}) {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / (1000 * 60)) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: "Días", value: timeLeft.dias },
    { label: "Horas", value: timeLeft.horas },
    { label: "Minutos", value: timeLeft.minutos },
    { label: "Segundos", value: timeLeft.segundos },
  ];

  return (
    <section className="relative w-full h-44 sm:h-52 overflow-hidden flex items-center justify-center text-white border-y border-white/10">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-[0.85]"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center text-center"
        >
          {items.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center justify-center">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[9px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/95 mt-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}