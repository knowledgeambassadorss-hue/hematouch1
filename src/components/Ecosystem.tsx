import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Rocket, RefreshCw } from "lucide-react";

const Ecosystem = () => {
  const steps = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      number: "01",
      title: "التخطيط الاستراتيجي",
      description: "نبدأ بفهم عميق لعلامتك التجارية، أهدافك، وجمهورك المستهدف لوضع خطة محكمة."
    },
    {
      icon: <Target className="w-12 h-12" />,
      number: "02",
      title: "التصميم الإبداعي",
      description: "نبتكر تصاميم جذابة وفريدة تعكس هويتك وتترك انطباعاً قوياً لدى عملائك."
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      number: "03",
      title: "التنفيذ المتقن",
      description: "نطلق حملاتك التسويقية بدقة عالية عبر القنوات الأنسب لجمهورك المستهدف."
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      number: "04",
      title: "التحسين المستمر",
      description: "نراقب الأداء باستمرار، نحلل البيانات، ونحسن النتائج لتحقيق أقصى عائد استثمار."
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            منظومتنا <span className="text-primary">الإبداعية</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify-balanced">
            نظام متكامل يجمع بين الإبداع والتكنولوجيا والخبرة لتحقيق نتائج استثنائية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift group relative overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-8 left-8 text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.number}
              </div>

              <CardContent className="p-10 relative z-10">
                <div className="inline-flex p-4 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-2xl mb-6 transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-justify-balanced text-lg">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                جاهز لتحويل علامتك التجارية؟
              </h3>
              <p className="text-lg text-muted-foreground mb-8 text-justify-balanced">
                دعنا نصمم منظومة النمو المثالية لعملك
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold rounded-full px-12 py-6 text-lg shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                ابدأ رحلتك الآن
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
