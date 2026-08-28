import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Rsvp({ 
  phoneNumber = "5211234567890", 
  deadline = "15 de octubre de 2026" 
}) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Asistiré',
    guests: '1'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `¡Hola! Confirmo mi respuesta para la boda:\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Estado:* ${formData.attendance}\n` +
      `*Número de personas:* ${formData.attendance === 'Asistiré' ? formData.guests : '0'}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full py-20 px-6 bg-[#9cb081] text-[#2c3321] flex flex-col items-center justify-center min-h-[650px]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mx-auto text-center"
      >
        <div className="flex justify-center mb-4">
          <svg className="w-8 h-8 text-[#2c3321]/80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 10 7 6 9C2 11 2 15 2 15C2 15 6 15 9 12C12 9 12 2 12 2Z" />
            <path d="M12 2C12 2 14 7 18 9C22 11 22 15 22 15C22 15 18 15 15 12C12 9 12 2 12 2Z" />
            <path d="M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl tracking-wide font-normal mb-3">
          ¡Confirma tu Asistencia!
        </h2>

        <div className="w-16 h-px bg-[#2c3321]/30 mx-auto mb-4" />

        <p className="italic text-sm sm:text-base text-[#2c3321]/90 mb-2 font-serif">
          Con la elegancia de la tradición, esperamos tu presencia
        </p>

        <p className="italic text-xs sm:text-sm text-[#2c3321]/80 mb-8">
          Confirma antes del {deadline} para asegurar tu lugar en nuestra celebración
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <input
              type="text"
              name="name"
              required
              placeholder="Tu nombre *"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-[#f0f2eb]/90 text-neutral-800 placeholder-neutral-500 border border-black/5 focus:outline-hidden focus:ring-2 focus:ring-[#445033]/40 transition-all text-sm"
            />
          </div>

          <div className="relative">
            <label className="block text-[11px] text-[#2c3321]/80 uppercase tracking-wider mb-1 font-medium ml-1">
              Asistencia
            </label>
            <select
              name="attendance"
              value={formData.attendance}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-[#f0f2eb]/90 text-neutral-800 border border-black/5 focus:outline-hidden focus:ring-2 focus:ring-[#445033]/40 transition-all text-sm appearance-none cursor-pointer"
            >
              <option value="Asistiré">Asistiré</option>
              <option value="No podré asistir">No podré asistir</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-[38px] text-[#2c3321]/60 text-xs">
              ▼
            </div>
          </div>

          {formData.attendance === 'Asistiré' && (
            <div>
              <label className="block text-[11px] text-[#2c3321]/80 uppercase tracking-wider mb-1 font-medium ml-1">
                Número de personas *
              </label>
              <input
                type="number"
                name="guests"
                min="1"
                max="10"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-[#f0f2eb]/90 text-neutral-800 border border-black/5 focus:outline-hidden focus:ring-2 focus:ring-[#445033]/40 transition-all text-sm"
              />
            </div>
          )}

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#c5c8bd] hover:bg-[#b5b9ac] active:scale-95 text-[#2c3321] font-medium text-sm tracking-wide transition-all shadow-sm cursor-pointer"
            >
              Confirmar asistencia
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}