import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import couplePhoto from "@/assets/couple-photo.jpg";
const GallerySection = () => {
  return <section className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
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
      }} className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Nuestra Historia
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Luis & Linda
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-lg shadow-wedding">
              <img alt="María y Carlos" className="w-full h-full object-cover" src="/lovable-uploads/c0515016-553d-4acf-b16c-490cfd3af3e4.jpg" />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/20 rounded-lg pointer-events-none" />
          </motion.div>

          {/* Book Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-8"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5" />
              Ver Nuestro Libro
            </a>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-center mt-12">
            <p className="font-display text-2xl italic text-foreground mb-6">
              "Donde hay amor, hay vida"
            </p>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              El amor tiene formas misteriosas de encontrarnos, incluso cuando estamos lejos de casa. A veces se esconde en los detalles más simples y otras, en los encuentros más inesperados.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default GallerySection;