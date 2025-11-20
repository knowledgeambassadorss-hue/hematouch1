import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, UserX } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "تحويلات ضعيفة رغم الزيارات",
      description: "تستقبل موقعك أعداداً كبيرة من الزيارات اليومية، لكن الزوار يغادرون بسرعة دون إتمام عملية الشراء أو التحويل المطلوب، مما يعني أن استثمارك الكبير في جذبهم يتبخر ويضيع دون تحقيق أي عائد مالي ملموس."
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "ضعف العائد على الإنفاق التسويقي",
      description: "تنفق ميزانيات تسويقية ضخمة وكبيرة على الحملات الإعلانية والترويجية المختلفة، لكن النتائج تأتي باهتة ومخيبة للآمال بشكل واضح، تشعر وكأنك تستثمر وتنفق أموالك في بئر عميق جداً لا قرار ولا نهاية له أبداً."
    },
    {
      icon: <UserX className="w-12 h-12" />,
      title: "انعدام الولاء للعلامة التجارية",
      description: "العملاء يشترون من علامتك التجارية مرة واحدة فقط ثم يختفون تماماً ولا يعودون مرة أخرى، علامتك التجارية المميزة لا تترك أثراً قوياً ودائماً في ذاكرتهم وقلوبهم ليجعلهم يعودون مجدداً ويصبحون عملاء دائمين مخلصين."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              هل يبدو هذا الســيناريو <span className="text-primary">مألوفًا</span>؟
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground text-justify">
              أنت لست وحدك في مواجهة هذه التحديات، هذه هي العقبات والمشاكل الصامتة التي تخنق وتعيق نمو وتطور العلامات التجارية الطموحة والواعدة.
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
                  <p className="text-muted-foreground leading-relaxed text-justify">
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
                مرحبًا بك في منظومة هيما تاتش
              </p>
              <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto text-justify">
                نحن في هيما تاتش لا نقدم أبداً حلولاً عشوائية أو قوالب جاهزة مكررة، بل نصمم ونبني لك منظومة نمو رقمي متكاملة ومتطورة، نظام تسويقي ذكي ومرن مصمم خصيصاً ليناسب طبيعة عملك ويحول جميع نقاط ضعفك وتحدياتك إلى أقوى وأبرز مميزاتك التنافسية في السوق.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Problems;
