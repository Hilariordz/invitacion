import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CalendarCard({
  month = "Noviembre",
  day = 28,
  year = 2026,
  title = "Boda Wendy & Nicolas",
  location = "Palapa Los Generales",
  details = "¡Te esperamos para celebrar nuestra boda!",
  mapUrl = "https://maps.app.goo.gl/REeBkLC7BxDnR4Ao6"
}) {
  const weekDays = ["LU", "MA", "MI", "JU", "VI", "SA", "DO"];
  const monthNames = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const monthIndex = monthNames.indexOf(month.toLowerCase());
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const calendarDays = Array.from(
    { length: (firstDay === 0 ? 6 : firstDay - 1) + daysInMonth },
    (_, index) => {
      const firstDayOffset = firstDay === 0 ? 6 : firstDay - 1;
      return index < firstDayOffset ? null : index - firstDayOffset + 1;
    }
  );

  const pad = (value) => String(value).padStart(2, "0");
  const eventDate = `${year}${pad(monthIndex + 1)}${pad(day)}`;
  const nextDay = new Date(year, monthIndex, day + 1);
  const nextDayDate = `${nextDay.getFullYear()}${pad(
    nextDay.getMonth() + 1
  )}${pad(nextDay.getDate())}`;
  const startDate = `${eventDate}T170000`;
  const endDate = `${nextDayDate}T020000`;
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
    `${details}\n\nVer ubicación: ${mapUrl}`
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
            {weekDays.map((dayName) => (
              <span
                key={dayName}
                className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase"
              >
                {dayName}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 sm:gap-2 items-center">
            {calendarDays.map((calendarDay, index) => {
              const isSelected = calendarDay === day;

              return (
                <div
                  key={index}
                  className="flex items-center justify-center h-8 sm:h-9"
                >
                  {calendarDay && isSelected ? (
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#828f73] text-white font-medium text-xs sm:text-sm flex items-center justify-center shadow-xs">
                      {calendarDay}
                    </span>
                  ) : calendarDay ? (
                    <span className="text-xs sm:text-sm text-neutral-700 font-medium">
                      {calendarDay}
                    </span>
                  ) : null}
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