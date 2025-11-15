import { Card, CardContent } from "@/components/ui/card";
import strategyBg from "@/assets/strategy-bg.jpg";

const Strategy = () => {
  return (
    <section id="strategy" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img src={strategyBg} alt="Strategy" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            استراتيجيات تسويق <span className="text-primary">ثاقبة</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover-lift">
            <CardContent className="p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-4">80%</div>
              <h3 className="text-xl font-bold text-foreground">نمو في معدل التحويل</h3>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover-lift">
            <CardContent className="p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-xl font-bold text-foreground">قصة نجاح نرويها</h3>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover-lift">
            <CardContent className="p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-4">98%</div>
              <h3 className="text-xl font-bold text-foreground">رضا شركاء النجاح</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
