import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  const timeUnits = [{
    value: timeLeft.days,
    label: "Días"
  }, {
    value: timeLeft.hours,
    label: "Horas"
  }, {
    value: timeLeft.minutes,
    label: "Minutos"
  }, {
    value: timeLeft.seconds,
    label: "Segundos"
  }];
  return <section className="py-20 bg-[#b3c7a3]">
      <div className="container mx-auto px-4 border-[#55763d] bg-[#b3c7a3]">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Cuenta Regresiva
          </h2>
          <p className="text-muted-foreground font-body">
            Faltan...
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {timeUnits.map((unit, index) => <motion.div key={unit.label} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-background rounded-lg p-6 md:p-8 shadow-wedding min-w-[100px] md:min-w-[140px]">
              <span className="font-display text-4xl md:text-6xl text-primary block">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-2 block">
                {unit.label}
              </span>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default CountdownSection;