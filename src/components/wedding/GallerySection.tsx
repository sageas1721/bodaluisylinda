import { motion } from "framer-motion";
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
            María & Carlos
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
              <img alt="María y Carlos" className="w-full h-full object-cover" src="/lovable-uploads/5ae2bb87-8625-445d-af30-c797c6d9680a.jpg" />
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary/20 rounded-lg pointer-events-none" />
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
              Nos conocimos hace 5 años en una tarde de primavera. Desde ese momento supimos 
              que nuestras vidas estaban destinadas a unirse. Después de mil aventuras, 
              risas y sueños compartidos, estamos listos para comenzar este nuevo capítulo juntos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default GallerySection;