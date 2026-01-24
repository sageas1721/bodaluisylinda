import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            María & Carlos
          </h2>
          <p className="font-display text-xl italic opacity-80 mb-8">
            15 de Junio, 2025
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gold-light">
            <span className="font-body text-sm tracking-widest uppercase">
              Hecho con
            </span>
            <Heart className="w-4 h-4 fill-current animate-pulse" />
            <span className="font-body text-sm tracking-widest uppercase">
              para nuestra boda
            </span>
          </div>

          <div className="mt-8 pt-8 border-t border-background/20">
            <p className="font-body text-xs opacity-60">
              © 2025 María & Carlos. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
