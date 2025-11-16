import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Strategy from "@/components/Strategy";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Portfolio from "@/components/Portfolio";
import EventManagement from "@/components/EventManagement";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <Hero />
        <Strategy />
        <About />
        <Problems />
        <Services />
        <Methodology />
        <Portfolio />
        <EventManagement />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
