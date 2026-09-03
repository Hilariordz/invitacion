import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CalendarCard({
  month = "Noviembre",
  day = 28,
  year = 2026,
  title = "Boda Wendy & Nicolas",
  location = "Hacienda San José",
  details = "¡Te esperamos para celebrar nuestra boda!"
}) {
  const weekDays = [
    { name: "LU", num: 23 },
    { name: "MA", num: 24 },
    { name: "MI", num: 25 },
    { name: "JU", num: 26 },
    { name: "VI", num: 27 },
    { name: "SA", num: 28 },
    { name: "DO", num: 29 },
  ];

  const startDate = "20261128T170000Z";
  const endDate = "20261129T020000Z";
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
    details
  )}&location=${encodeURIComponent(location)}`;

  return (
    <section className="w-full bg-[#f4f2e8] py-16 px-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100 w-full max-w-[320px] text-center">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-800 mb-6 capitalize">
            {month}
          </h3>

          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3">
            {weekDays.map((d, index) => (
              <span
                key={index}
                className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase"
              >
                {d.name}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2 items-center">
            {weekDays.map((d, index) => {
              const isSelected = d.num === day;

              return (
                <div
                  key={index}
                  className="flex items-center justify-center h-8 sm:h-9"
                >
                  {isSelected ? (
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#828f73] text-white font-medium text-xs sm:text-sm flex items-center justify-center shadow-xs">
                      {d.num}
                    </span>
                  ) : (
                    <span className="text-xs sm:text-sm text-neutral-700 font-medium">
                      {d.num}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-[#828f73] hover:bg-[#727f63] active:scale-95 text-white text-xs sm:text-sm font-medium tracking-wide shadow-xs transition-all cursor-pointer"
        >
          <span>Agregar al calendario</span>
          <ArrowUpRight size={15} />
        </a>
      </motion.div>
    </section>
  );
}