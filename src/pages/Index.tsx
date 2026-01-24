import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import EventDetails from "@/components/wedding/EventDetails";
import GallerySection from "@/components/wedding/GallerySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import InfoSection from "@/components/wedding/InfoSection";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CountdownSection />
      <GallerySection />
      <EventDetails />
      <InfoSection />
      <RSVPSection />
      <Footer />
    </main>
  );
};

export default Index;
