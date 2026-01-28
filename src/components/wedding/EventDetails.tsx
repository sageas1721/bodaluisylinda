import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import churchImage from "@/assets/church-image.png";
import restaurantImage from "@/assets/restaurant-image.png";

const EventDetails = () => {
  const events = [
    {
      image: churchImage,
      title: "Ceremonia",
      time: "3:30 PM",
      location: "Iglesia de la Santísima Trinidad",
      address: "",
      description: "Celebraremos nuestra unión ante Dios y nuestras familias.",
      mapUrl: "https://maps.app.goo.gl/WmDzkcZkWeMvAcLr9?g_st=iw",
    },
    {
      image: restaurantImage,
      title: "Recepción",
      time: "6:00 PM - 1:00 AM",
      location: "Al Alma Restaurante",
      address: "",
      description: "Una noche de celebración, música y alegría.",
      mapUrl: "https://maps.app.goo.gl/S5UY6nSk585vUAKz7?g_st=iw",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Te esperamos
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Detalles del Evento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-lg p-8 md:p-10 shadow-wedding text-center border border-border/50"
            >
              <div className="w-full h-40 mb-6 overflow-hidden rounded-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-display text-3xl text-foreground mb-4">
                {event.title}
              </h3>
              
              <div className="flex items-center justify-center gap-2 text-primary mb-4">
                <Clock className="w-4 h-4" />
                <span className="font-body font-medium">{event.time}</span>
              </div>
              
              <p className="font-display text-xl text-foreground mb-2">
                {event.location}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">{event.address}</span>
              </div>
              
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {event.description}
              </p>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 border border-primary text-primary font-body text-xs tracking-widest uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Ver Mapa
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
