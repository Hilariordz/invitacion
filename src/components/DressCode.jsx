import { motion } from 'framer-motion';

export default function DressCode() {
  return (
    <section
      id="dress-code"
      className="w-full bg-[#eeece3] px-6 py-16 text-[#3e3b36] sm:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto flex w-full max-w-5xl justify-center"
      >
        <div className="w-full max-w-xl text-center">
          <h2 className="font-serif text-4xl uppercase leading-[0.9] sm:text-6xl">
            Código de
            <br />
            vestimenta
          </h2>
          <div className="mx-auto my-7 h-px w-24 bg-[#3e3b36]/70" />
          <h3 className="font-serif text-3xl uppercase leading-none sm:text-4xl">
            Elegante
            <br />
            formal
          </h3>
          <img
            src="/moda.png"
            alt="Inspiración de vestimenta elegante formal"
            className="mx-auto mt-6 block h-auto w-full max-w-90 object-contain"
          />
          <a
            href="#dress-code"
            className="mt-5 inline-block font-serif text-xl underline underline-offset-4 transition-colors hover:text-[#6f7b65]"
          >
         
          </a>
        </div>
      </motion.div>
    </section>
  );
}