import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import floralBg from "@/assets/floral-ref2.png";

const GallerySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Floral Background */}
      <div className="absolute inset-0">
        <img 
          src={floralBg} 
          alt="Fondo floral" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-elegant text-3xl md:text-4xl text-primary mb-4"
          >
            Nuestra Historia
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-script text-5xl md:text-7xl text-amber-700"
            style={{ textShadow: '2px 2px 4px rgba(139,69,19,0.2)' }}
          >
            Luis & Linda
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative outer frame */}
            <div className="absolute -inset-6 md:-inset-8 border-2 border-primary/30 rounded-lg pointer-events-none" />
            <div className="absolute -inset-3 md:-inset-4 border border-amber-600/20 rounded-lg pointer-events-none" />
            
            <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <img 
                alt="Luis y Linda" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                src="/lovable-uploads/c0515016-553d-4acf-b16c-490cfd3af3e4.jpg" 
              />
            </div>
          </motion.div>

          {/* Book Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-10"
          >
            <a
              href="https://heyzine.com/flip-book/a98aaf4ec0.html#page/1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              Ver Nuestro Libro
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-elegant text-3xl md:text-4xl text-primary mb-6"
            >
              "Nuestro amor, bendecido por Dios"
            </motion.p>
            <p className="font-display text-lg md:text-xl text-amber-800/90 leading-relaxed max-w-2xl mx-auto italic">
              El amor tiene formas misteriosas de encontrarnos, incluso cuando estamos lejos de casa. A veces se esconde en los detalles más simples y otras, en los encuentros más inesperados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
