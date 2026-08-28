import { Volume2, VolumeX } from 'lucide-react';

export default function FloatingMusic({ isPlaying, togglePlay }) {
  return (
    <button
      onClick={togglePlay}
      aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#626e57] text-white flex items-center justify-center shadow-xl border border-white/20 active:scale-95 transition-all duration-200 cursor-pointer"
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 animate-pulse" />
      ) : (
        <VolumeX className="w-5 h-5 opacity-80" />
      )}
    </button>
  );
}