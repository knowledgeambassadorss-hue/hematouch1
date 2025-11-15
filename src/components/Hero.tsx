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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-3 md:px-4">
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

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Card */}
          <Card className="bg-card/80 backdrop-blur-xl border-2 border-border shadow-[var(--shadow-intense)] overflow-hidden">
            <CardContent className="p-6 md:p-12 lg:p-16 text-center">
              {/* Main Heading - Arabic */}
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight">
                <span className="text-foreground">إتجاهــك </span>
                <span className="text-primary">الصح</span>
                <span className="text-foreground"> يبــدأ من هنــا</span>
              </h1>

              {/* English Subtitle */}
              <p className="text-xl md:text-2xl lg:text-3xl text-primary font-bold mb-6 md:mb-8">
                The Right Direction Starts Here
              </p>

              {/* Divider */}
              <div className="w-24 md:w-32 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>

              {/* Main Tagline */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                كــــل رحلـــــة تبـــــدأ بالبوصلـــــة
              </h2>
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground/80 mb-8 md:mb-12">
                لتصـــل للنتائــج
              </h3>

              {/* English Translation */}
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                Every journey begins with the compass & ends with measurable results
              </p>

              {/* CTA Button - Enhanced for visibility */}
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-extrabold rounded-full px-10 md:px-16 py-6 md:py-8 text-lg md:text-2xl shadow-[var(--shadow-glow)] hover:shadow-2xl hover:-translate-y-3 hover:scale-110 transition-all duration-300 group animate-pulse"
                style={{
                  animationDuration: '2s',
                  animationIterationCount: '3'
                }}
              >
                تواصل معنا الآن
                <ArrowLeft className="mr-2 md:mr-3 w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
              </Button>
              <p className="text-muted-foreground text-sm md:text-base mt-4">
                احصل على استشارة مجانية الآن
              </p>
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
