import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, UserX } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "تحويلات ضعيفة رغم الزيارات",
      description: "تستقبل الزوار، لكنهم يغادرون دون شراء. استثمارك في جذبهم يتبخر دون أي عائد."
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "ضعف العائد على الإنفاق التسويقي",
      description: "ميزانيات تسويقية ضخمة ونتائج باهتة. تشعر وكأنك تستثمر في بئر لا قرار له."
    },
    {
      icon: <UserX className="w-12 h-12" />,
      title: "انعدام الولاء للعلامة التجارية",
      description: "يشترون مرة... ثم يختفون. علامتك التجارية لا تترك أثراً في ذاكرتهم ليجعلهم يعودون."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              هل يبدو هذا الســيناريو <span className="text-primary">مألوفا</span> ؟
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground">
              أنت لست وحدك... هذه هي العقبات الصامتة التي تخنق نمو العلامات التجارية الطموحة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-xl border-2 border-destructive/30 hover:border-destructive transition-all duration-300 hover-lift">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-destructive/10 text-destructive rounded-2xl mb-6">
                    {problem.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Transition to Solution */}
          <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary shadow-[var(--shadow-glow)]">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                هنا يتغير كل شيء.
              </h3>
              <p className="text-2xl text-primary font-bold mb-6">
                مرحباً بك في منظومة هيما تاتش
              </p>
              <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                نحن لا نقدم حلولاً عشوائية، بل نصمم لك منظومة نمو متكاملة. نظام ذكي مصمم خصيصاً ليحول نقاط ضعفك إلى أقوى مميزاتك التنافسية.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Problems;
