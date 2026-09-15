    import { motion } from 'framer-motion';

export default function Phrase({
  title = "Porque adonde tú vayas yo iré, y donde tú pases la noche yo pasaré la noche. Tu pueblo será mi pueblo, y tu Dios será mi Dios.",
  quote = 'Rut 1:16',
  leafImage = "../public/recinv.png", 
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
        <div className="w-32 h-28 mb-8 flex items-center justify-center">
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