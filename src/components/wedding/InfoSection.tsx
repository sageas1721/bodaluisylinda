import { motion } from "framer-motion";
import { Shirt, Gift, Camera, Music, Upload, AlertTriangle } from "lucide-react";
import countdownBg from "@/assets/countdown-background.jpg";

const InfoSection = () => {
  const infoCards = [
    {
      icon: Shirt,
      title: "Código de Vestimenta",
      description: "Formal/Elegante con libertad para disfrutar del clima de Cartagena"
    },
    {
      icon: Gift,
      title: "Lluvia de Sobres",
      description: "Tenerlos a nuestro lado en este día tan especial es nuestro mayor regalo. Si deseas tener un detalle con nosotros será recibida con mucho cariño y agradecimiento.",
      extra: "LLUVIA DE SOBRES 💌"
    },
    {
      icon: Camera,
      title: "Comparte tus Fotos",
      description: "Presiona el botón 'Subir' para compartir con nosotros tus fotos de este día tan especial. Nos encantará revivir cada momento a través de tus recuerdos. 📸✨",
      hasButton: true,
      buttonText: "SUBIR ⬆️",
      buttonUrl: "https://photos.app.goo.gl/oL7o45UPKCQEq2nr7"
    },
    {
      icon: Music,
      title: "¿Una Canción?",
      description: "¿Tienes una canción que te gustaría escuchar? Escríbela en tu confirmación."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={countdownBg} 
          alt="Fondo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-white font-body text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
            Información
          </p>
          <h2 className="font-elegant text-4xl md:text-6xl text-white drop-shadow-lg"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.4)' }}>
            Detalles Importantes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {infoCards.map((card, index) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center shadow-wedding border border-border/50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {card.description}
              </p>
              {card.extra && (
                <p className="text-primary font-body text-sm font-semibold mt-3">
                  {card.extra}
                </p>
              )}
              {card.hasButton && (
                <a
                  href={card.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground font-body text-xs tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-all duration-300"
                >
                  {card.buttonText}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
