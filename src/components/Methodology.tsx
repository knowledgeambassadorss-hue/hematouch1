import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      icon: <Search className="w-16 h-16" />,
      step: "الخطوة الأولى",
      title: "التشخيص العميق",
      description: "نغوص بعمق في تفاصيل عملك التجاري الدقيقة، نستمع باهتمام لاحتياجاتك، نحلل وضعك الحالي بدقة، ونفهم بشكل شامل التحديات الحقيقية التي تواجهها وأهدافك التجارية الكبرى الطموحة بوضوح تام.",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-500"
    },
    {
      icon: <Lightbulb className="w-16 h-16" />,
      step: "الخطوة الثانية",
      title: "هندسة الاستراتيجية",
      description: "نرسم ونصمم لك خارطة طريق استراتيجية واضحة للنجاح، خطة تسويقية مُحكمة ومخصصة خصيصاً لعلامتك التجارية لتحقيق جميع أهدافك التسويقية والتجارية بأسرع وأذكى وأكفأ الطرق الممكنة والمجربة.",
      color: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-500"
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      step: "الخطوة الثالثة",
      title: "الإبداع والتنفيذ",
      description: "هنا تحديداً يتحول السحر والتخطيط إلى واقع ملموس، فريقنا الموهوب من المبدعين والمصممين المحترفين يترجمون الاستراتيجية الموضوعة بدقة إلى تجربة رقمية مبهرة لا تُقاوم تأسر القلوب والعقول معاً.",
      color: "from-primary/20 to-primary/30",
      iconColor: "text-primary"
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      step: "الخطوة الرابعة",
      title: "التطور المستمر",
      description: "نحن شركاؤك الحقيقيون في رحلة النمو والتطور، نراقب ونتابع الأداء بدقة متناهية ونعمل على التحسين والتطوير المستمر لنضمن لك أنك لا تصل إلى القمة والريادة فحسب، بل تبقى وتستمر فيها بثبات وتميز.",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-500"
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            منهجيتنا: <span className="text-primary">٤ خطوات</span> نحو الريادة
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
            لا نؤمن مطلقاً بالصدفة أو الحلول العشوائية، بل نؤمن إيماناً راسخاً بالعمليات والمنهجيات المدروسة بعناية فائقة والمبنية على بيانات دقيقة تضمن لك تحقيق نتائج استثنائية ملموسة ومستدامة.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <Card className={`bg-gradient-to-r ${step.color} border-2 border-border hover:border-primary transition-all duration-300 hover-lift group`}>
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Icon */}
                    <div className={`inline-flex p-6 bg-card rounded-2xl ${step.iconColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                        {step.step}
                      </div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Number */}
                    <div className="text-8xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors flex-shrink-0 hidden lg:block">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <Card className="bg-card/80 backdrop-blur-xl border-2 border-primary/30 max-w-3xl mx-auto">
            <CardContent className="p-10">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="text-primary font-bold">النتيجة:</span> منظومة تسويقية متكاملة تحول تحدياتك إلى فرص، وتضع علامتك التجارية في موقع الصدارة
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
