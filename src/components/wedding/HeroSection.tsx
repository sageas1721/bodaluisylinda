import { motion } from "framer-motion";
import heroFloral from "@/assets/hero-floral.jpg";

const HeroSection = () => {
  const weddingDate = new Date("2025-06-15T16:00:00");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroFloral}
          alt="Decoración floral"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-muted-foreground font-body text-sm tracking-[0.3em] uppercase mb-6">
            Estamos felices de invitarte a nuestra boda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-4">
            María
          </h1>
          <div className="divider-ornament text-primary my-6">
            <span className="font-display text-3xl italic">&</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-foreground">
            Carlos
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12"
        >
          <p className="font-display text-2xl md:text-3xl text-primary italic">
            15 de Junio, 2025
          </p>
          <p className="text-muted-foreground font-body text-lg mt-3 tracking-wide">
            Hacienda Los Olivos, Guadalajara
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <a
            href="#rsvp"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Confirmar Asistencia
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
