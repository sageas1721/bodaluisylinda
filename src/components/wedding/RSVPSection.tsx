import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Heart, AlertTriangle, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import floralBg from "@/assets/floral-ref1.jpg";

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    additionalGuests: [] as string[],
    allergies: "",
    song: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update additional guests array when guest count changes
  useEffect(() => {
    const guestCount = parseInt(formData.guests);
    if (guestCount > 1) {
      const currentAdditional = formData.additionalGuests;
      const newAdditional = Array(guestCount - 1).fill('').map((_, i) => currentAdditional[i] || '');
      setFormData(prev => ({ ...prev, additionalGuests: newAdditional }));
    } else {
      setFormData(prev => ({ ...prev, additionalGuests: [] }));
    }
  }, [formData.guests]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format data for Google Sheets
      const submissionData = {
        nombre: formData.name,
        email: formData.email,
        asistira: formData.attending === 'yes' ? 'Sí' : 'No',
        numInvitados: formData.guests,
        invitadosAdicionales: formData.additionalGuests.filter(g => g.trim()).join(', '),
        alergias: formData.allergies || 'No tengo',
        cancion: formData.song,
        fechaConfirmacion: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send to Google Sheets via Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJbxnpIQpoLfPVnkDl19pigmfrv6WdvAjP76ZcSgHwqmSyidoJZcWKxwU881YDBqXC/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      setSubmitted(true);
      toast({
        title: "¡Confirmación enviada!",
        description: "Tu asistencia ha sido registrada correctamente.",
      });
    } catch (error) {
      console.error('Error al enviar:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu confirmación. Por favor, intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdditionalGuestChange = (index: number, value: string) => {
    const newAdditional = [...formData.additionalGuests];
    newAdditional[index] = value;
    setFormData({ ...formData, additionalGuests: newAdditional });
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={floralBg} alt="Fondo floral" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto text-center bg-white/90 backdrop-blur-sm rounded-lg p-12 shadow-wedding"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mb-6">
              <Check className="w-10 h-10" />
            </div>
            <h2 className="font-elegant text-4xl text-primary mb-4">
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
    <section id="rsvp" className="py-24 relative overflow-hidden">
      {/* Floral Background */}
      <div className="absolute inset-0">
        <img src={floralBg} alt="Fondo floral" className="w-full h-full object-cover opacity-50" />
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
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Esperamos verte
          </p>
          <h2 className="font-elegant text-4xl md:text-6xl text-primary mb-4">
            Confirma tu Asistencia
          </h2>
          <p className="text-foreground font-body max-w-lg mx-auto">
            Por favor confirma antes del <strong>15 de junio de 2026</strong>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-wedding border border-border/50"
        >
          <div className="space-y-6">
            {/* Nombre Completo */}
            <div>
              <label className="block font-body text-sm text-foreground mb-2 font-medium">
                Nombre Completo (del representante) *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Correo Electrónico */}
            <div>
              <label className="block font-body text-sm text-foreground mb-2 font-medium">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="tu@email.com"
              />
            </div>

            {/* ¿Asistirás? */}
            <div>
              <label className="block font-body text-sm text-foreground mb-2 font-medium">
                ¿Asistirás? *
              </label>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    required
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="font-body text-foreground">Sí asistiré</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    onChange={handleChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="font-body text-foreground">No asistiré</span>
                </label>
              </div>
            </div>

            {/* Número de Invitados */}
            <div>
              <label className="block font-body text-sm text-foreground mb-2 font-medium">
                Número de Invitados
              </label>
              <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="px-4 py-3 bg-white border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="1">1 cupo</option>
                  <option value="2">2 cupos</option>
                  <option value="3">3 cupos</option>
                  <option value="4">4 cupos</option>
                  <option value="5">5 cupos</option>
                </select>
                <span className="text-sm text-muted-foreground font-body">
                  Selecciona dependiendo de los pases reservados en tu tarjeta de invitación personalizada
                </span>
              </div>
            </div>

            {/* Invitados Adicionales */}
            {parseInt(formData.guests) > 1 && (
              <div>
                <label className="block font-body text-sm text-foreground mb-2 font-medium">
                  Invitados Adicionales
                </label>
                <p className="text-xs text-muted-foreground mb-3 font-body">
                  Llena este campo si tienes más de 1 cupo
                </p>
                <div className="space-y-3">
                  {formData.additionalGuests.map((guest, index) => (
                    <input
                      key={index}
                      type="text"
                      value={guest}
                      onChange={(e) => handleAdditionalGuestChange(index, e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder={`Nombre del invitado ${index + 2}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Alergias e Intolerancias */}
            <div>
              <label className="block font-body text-sm text-foreground mb-2 font-medium flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Alergias e Intolerancias Alimentarias
              </label>
              <p className="text-xs text-muted-foreground mb-3 font-body">
                Es muy importante para nosotros conocer cualquier restricción alimentaria. Escribe cuál o de lo contrario coloca 'no tengo'
              </p>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Ej: Alergia a mariscos, intolerancia a lactosa, etc."
              />
            </div>

            {/* Canción Imprescindible */}
            <div>
              <label className="block font-body text-sm text-foreground mb-2 font-medium flex items-center gap-2">
                <Music className="w-4 h-4 text-primary" />
                Tu Canción Imprescindible
              </label>
              <p className="text-xs text-muted-foreground mb-3 font-body">
                ¿Qué canción crees que no puede faltar en nuestra boda?
              </p>
              <input
                type="text"
                name="song"
                value={formData.song}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Artista - Nombre de la canción"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Enviando...
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4" />
                  Confirmar Asistencia
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;
