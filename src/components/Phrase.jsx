    import { motion } from 'framer-motion';

export default function Phrase({
  title = "¡La tradición se renueva!",
  quote = "Nuestro amor madura como las aceitunas doradas",
  leafImage = "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=300&q=80"
}) {
  return (
    <section className="w-full bg-[#f4f2e8] py-24 sm:py-32 px-6 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto flex flex-col items-center"
      >
        <div className="w-16 h-12 mb-8 flex items-center justify-center">
          <img
            src={leafImage}
            alt="Detalle botánico"
            className="w-full h-full object-contain mix-blend-multiply opacity-80"
          />
        </div>

        <h3 className="font-serif italic text-2xl sm:text-3xl font-light text-[#55604b] tracking-wide mb-4">
          {title}
        </h3>

        <p className="font-serif text-sm sm:text-base text-neutral-800 leading-relaxed font-normal max-w-xs sm:max-w-sm">
          {quote}
        </p>
      </motion.div>
    </section>
  );
}