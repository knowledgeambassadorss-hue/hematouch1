import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroCompass from "@/assets/hero-compass.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCompass} 
          alt="Compass Navigation" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      {/* Decorative Compass Icon */}
      <div className="absolute top-1/4 left-1/4 opacity-10 hidden lg:block">
        <Compass className="w-96 h-96 text-primary animate-spin" style={{ animationDuration: '60s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <Card className="bg-card/80 backdrop-blur-xl border-2 border-border shadow-[var(--shadow-intense)] overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center">
              {/* Main Heading - Arabic */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="text-foreground">إتجاهــك </span>
                <span className="text-primary">الصح</span>
                <span className="text-foreground"> يبــدأ من هنــا</span>
              </h1>

              {/* English Subtitle */}
              <p className="text-2xl md:text-3xl text-primary font-bold mb-8">
                The Right Direction Starts Here
              </p>

              {/* Divider */}
              <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

              {/* Main Tagline */}
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                كــــل رحلـــــة تبـــــدأ بالبوصلـــــة
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground/80 mb-12">
                لتصـــل للنتائــج
              </h3>

              {/* English Translation */}
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Every journey begins with the compass & ends with measurable results
              </p>

              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold rounded-full px-12 py-8 text-xl shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                تواصل معنا الآن
                <ArrowLeft className="mr-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">80%</div>
                <div className="text-lg font-bold text-foreground">نمو في معدل التحويل</div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">100%</div>
                <div className="text-lg font-bold text-foreground">قصة نجاح نرويها</div>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">98%</div>
                <div className="text-lg font-bold text-foreground">رضا شركاء النجاح</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
