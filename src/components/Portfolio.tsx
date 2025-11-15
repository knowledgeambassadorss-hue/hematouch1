import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "حملة تسويقية متكاملة",
      category: "تسويق رقمي",
      description: "حملة إعلانية شاملة على وسائل التواصل الاجتماعي حققت زيادة 300% في المبيعات",
      tags: ["إعلانات", "محتوى", "تحليلات"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "هوية بصرية متكاملة",
      category: "تصميم إبداعي",
      description: "تصميم هوية بصرية عصرية لشركة ناشئة في مجال التقنية",
      tags: ["شعار", "ألوان", "دليل العلامة"],
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "فيديو ترويجي احترافي",
      category: "إنتاج مرئي",
      description: "إنتاج فيديو ترويجي بدقة 4K حقق أكثر من مليون مشاهدة في أسبوع",
      tags: ["تصوير", "مونتاج", "موشن"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "موقع إلكتروني تفاعلي",
      category: "تطوير مواقع",
      description: "تطوير موقع تجارة إلكترونية بتجربة مستخدم مميزة وأداء عالي",
      tags: ["React", "تجاوب", "سرعة"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "إدارة حسابات التواصل",
      category: "وسائل التواصل",
      description: "إدارة شاملة لحسابات مطعم فاخر مع محتوى يومي عالي الجودة",
      tags: ["تخطيط", "تصميم", "تفاعل"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "استراتيجية نمو رقمية",
      category: "استشارات",
      description: "خطة تسويقية استراتيجية ساعدت على مضاعفة الإيرادات في 6 أشهر",
      tags: ["تحليل", "تخطيط", "تنفيذ"],
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            أعمالنا <span className="text-primary">الإبداعية</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نفخر بمشاريعنا الناجحة التي حققت نتائج استثنائية لعملائنا
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-lift hover:shadow-[var(--shadow-elegant)] border-2 hover:border-primary transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-4 border-white/50 rounded-full animate-pulse"></div>
                </div>
              </div>

              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                  {project.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            هل أنت مستعد لرؤية علامتك التجارية تنمو؟
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            دعنا نساعدك على تحقيق أهدافك من خلال حلول إبداعية ومبتكرة
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="inline-block bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold rounded-full px-10 py-4 shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            ابدأ مشروعك الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
