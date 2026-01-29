import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Luis y Linda" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-body text-sm tracking-[0.3em] uppercase mb-6 text-white drop-shadow-lg"
          >
            Estamos felices de invitarte a nuestra boda
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
        >
          <h1 
            className="font-script text-7xl md:text-9xl lg:text-[10rem] text-amber-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] gold-text-shadow mb-2"
            style={{ 
              textShadow: '3px 3px 6px rgba(0,0,0,0.3), 0 0 30px rgba(218,165,32,0.2)' 
            }}
          >
            Luis
          </h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="my-4"
          >
            <span 
              className="font-script text-5xl md:text-6xl text-amber-200/90 drop-shadow-lg"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              &
            </span>
          </motion.div>
          <h1 
            className="font-script text-7xl md:text-9xl lg:text-[10rem] text-amber-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] gold-text-shadow"
            style={{ 
              textShadow: '3px 3px 6px rgba(0,0,0,0.3), 0 0 30px rgba(218,165,32,0.2)' 
            }}
          >
            Linda
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <p 
            className="font-display text-2xl md:text-3xl italic text-amber-100 drop-shadow-lg"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}
          >
            1 de Agosto, 2026
          </p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="font-dancing text-xl md:text-2xl mt-3 tracking-wide text-white drop-shadow-lg"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}
          >
            Cartagena de Indias
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16"
        >
          <a 
            href="#rsvp" 
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Confirmar Asistencia
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/80 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
