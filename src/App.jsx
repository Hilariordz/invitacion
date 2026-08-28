import { useState, useRef } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Rsvp from './components/Rsvp';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Se requiere interacción para reproducir:", err));
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-stone-50 overflow-x-hidden">
      {}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {}
      <Hero 
        bride="Nicolas" 
        groom="Wendy" 
        date="28 / NOV / 2026"
        isPlaying={isPlaying}
        togglePlay={togglePlay}
      />
      <Countdown targetDate="2026-11-28T00:00:00" />
      <Rsvp phoneNumber="5218445032212" />
    </div>
  );
}