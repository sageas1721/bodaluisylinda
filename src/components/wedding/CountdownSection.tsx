import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import countdownBg from "@/assets/countdown-background.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const weddingDate = new Date("2026-08-01T15:30:00");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={countdownBg} 
          alt="Fondo cuenta regresiva" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-white font-bold drop-shadow-lg leading-relaxed"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
            Cuenta atrás para el día más especial de nuestras vidas
          </h2>
        </motion.div>

        <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
          {timeUnits.map((unit, index) => (
            <motion.div 
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 md:p-6 lg:p-8 min-w-[70px] md:min-w-[120px] lg:min-w-[140px] border border-white/30"
            >
              <span className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-bold block drop-shadow-lg"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-body text-xs md:text-sm text-white/90 uppercase tracking-widest mt-2 block drop-shadow">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
