import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    dietary: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage/20 text-sage-dark mb-6">
              <Check className="w-10 h-10" />
            </div>
            <h2 className="font-display text-4xl text-foreground mb-4">
              ¡Gracias!
            </h2>
            <p className="text-muted-foreground font-body">
              Tu confirmación ha sido recibida. ¡Estamos emocionados de celebrar contigo!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Esperamos verte
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Confirma tu Asistencia
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Por favor confirma antes del 1 de Mayo, 2025
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-card rounded-lg p-8 md:p-12 shadow-wedding border border-border/50"
        >
          <div className="space-y-6">
            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                ¿Asistirás? *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="font-body text-foreground">Sí, asistiré</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="font-body text-foreground">No podré asistir</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Número de Invitados
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
              </select>
            </div>

            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Restricciones Alimentarias
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Vegetariano, alergias, etc."
              />
            </div>

            <div>
              <label className="block font-body text-sm text-foreground mb-2">
                Mensaje para los Novios
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                placeholder="Escribe un mensaje especial..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-4 h-4" />
              Confirmar Asistencia
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
