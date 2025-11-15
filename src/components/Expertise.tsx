import { Card, CardContent } from "@/components/ui/card";
import { Brain, LineChart, Palette, Video, Globe, BarChart3 } from "lucide-react";

const Expertise = () => {
  const expertise = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "تجارب مُصممة للبيع",
      description: "كل بكسل، كل كلمة، وكل لون في تصميمنا له هدف واحد: تحويل الزائر المتردد إلى عميل شغوف."
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "استراتيجيات تسويق ثاقبة",
      description: "نحلل البيانات لنسمع ما لا يقوله السوق، ونبني حملات لا تجذب الانتباه فحسب، بل تبني الثقة وتحقق الأرباح."
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "محتوى مرئي يروي قصصاً لا تُنسى",
      description: "فيديوهات ليست مجرد إنتاج... هي تجارب بصرية تُحرّك المشاعر وتُلهم القرارات."
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "إدارة متابعة دقيقة",
      description: "نراقب كل رقم، نحسن كل تفصيل، ونصنع لك نمواً مستداماً يتطور يوماً بعد يوم."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "تواجد رقمي قوي",
      description: "نبني لك حضوراً رقمياً لا يُنسى عبر جميع المنصات، يعزز من هويتك ويزيد من ولاء عملائك."
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "تحليلات متقدمة",
      description: "نستخدم أحدث أدوات التحليل لفهم سلوك جمهورك واتخاذ قرارات تسويقية ذكية ومبنية على البيانات."
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-primary">خبراتنا</span> المتميزة
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نجمع بين الإبداع والتكنولوجيا لنقدم لك حلولاً تسويقية شاملة تحقق النتائج
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {expertise.map((item, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift group"
            >
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-2xl mb-6 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
