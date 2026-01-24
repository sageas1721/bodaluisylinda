import { motion } from "framer-motion";
import { Shirt, Gift, Camera, Music } from "lucide-react";

const InfoSection = () => {
  const infoCards = [
    {
      icon: Shirt,
      title: "Código de Vestimenta",
      description: "Formal / Elegante. Evita el color blanco, reservado para la novia.",
    },
    {
      icon: Gift,
      title: "Mesa de Regalos",
      description: "Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos algo, visita nuestra mesa de regalos.",
    },
    {
      icon: Camera,
      title: "Comparte tus Fotos",
      description: "Usa el hashtag #MariayCarlos2025 en tus publicaciones para que podamos ver tus fotos.",
    },
    {
      icon: Music,
      title: "¿Una Canción?",
      description: "¿Tienes una canción que te gustaría escuchar? Escríbela en tu confirmación.",
    },
  ];

  return (
    <section className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Información
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
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
              className="bg-background rounded-lg p-6 text-center shadow-wedding border border-border/50 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-light/30 text-primary mb-4">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
