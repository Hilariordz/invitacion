import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locationsData = [
  {
    type: "Boda Civil",
    place: "Palapa Los Generales",
    time: "3:00 PM",
    address: "Ramos Arizpe,Coahuila",
    mapUrl: "https://maps.app.goo.gl/REeBkLC7BxDnR4Ao6"
  },
  {
    type: "Discurso Publico",
    place: "Luís Gutiérrez 305, Blanca Esthela, #25904 Ramos Arizpe, Coah",
    time: "3:00 PM",
    address: "Ramos Arizpe,Coahuila",
    mapUrl: "https://maps.app.goo.gl/xigierXbHDPv57x69"
  },
  {
    type: "Recepción",
    place: "Palapa Los Generales",
    time: "8:00 PM",
    address: "Ramos Arizpe,Coahuila",
    mapUrl: "https://maps.app.goo.gl/REeBkLC7BxDnR4Ao6"
  }
];

export default function Locations() {
  return (
    <section className="w-full bg-[#f4f2e8] py-20 px-4 sm:px-6 text-neutral-800 border-t border-neutral-200/60">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-wide font-normal">
            Ubicaciones
          </h2>
          <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
        </motion.div>

        <div className="w-full flex flex-col gap-8 items-center">
          {locationsData.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] flex flex-col items-center"
            >
              <div className="w-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-neutral-100/80 text-center relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 w-full mb-3">
                  <span className="w-8 h-px bg-neutral-300/80" />
                  <span className="text-xs tracking-[0.2em] text-[#828f73] font-serif font-bold uppercase">
                    {loc.time}
                  </span>
                  <span className="w-8 h-px bg-neutral-300/80" />
                </div>

                <h3 className="font-serif italic text-2xl sm:text-[26px] text-neutral-800 font-normal mb-2 leading-tight">
                  {loc.type}
                </h3>

                <h4 className="font-serif text-base text-neutral-800 font-semibold mb-2">
                  {loc.place}
                </h4>

                <p className="font-serif italic text-xs text-neutral-500 leading-relaxed mb-6 max-w-[240px]">
                  {loc.address}
                </p>

                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#242b23] hover:bg-[#151914] active:scale-95 text-white text-[11px] font-semibold tracking-widest uppercase transition-all shadow-md cursor-pointer"
                >
                  <MapPin size={13} className="text-[#9cb081]" />
                  <span>Ver en GPS</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}