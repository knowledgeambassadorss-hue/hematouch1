import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              من <span className="text-primary">نحن</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <Card className="bg-card/80 backdrop-blur-xl border-2 border-border shadow-[var(--shadow-elegant)] mb-12">
            <CardContent className="p-10 md:p-16">
              <p className="text-xl text-foreground leading-relaxed mb-6 text-justify">
                وكالتنا للتسويق الرقمي متكاملة الخدمات، تأسست برؤية واضحة لدعم العلامات التجارية المحلية والإقليمية من خلال تقديم حلول تسويقية مبتكرة وتنفيذية عالية الجودة، تمكنها من تحقيق النمو المستدام والتفوق التنافسي في السوق السعودي الديناميكي المتطور، مع التركيز على تعزيز الحضور الرقمي وبناء هوية قوية مميزة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                نسعى بشكل دائم ومستمر لتوفير كل ما تحتاجه العلامات التجارية من استراتيجيات تسويقية ذكية، أدوات تقنية حديثة، وحلول إبداعية متطورة تساعدها على تحقيق أهدافها التجارية الطموحة والتواصل بفعالية واحترافية مع جمهورها المستهدف بطرق مؤثرة، عملاؤنا وشركاء نجاحنا دائماً في قلب اهتماماتنا، مما يدفعنا باستمرار لتقديم أفضل الحلول المبتكرة والخدمات عالية الجودة المصممة خصيصاً لتضمن تحقيق تطلعاتهم وتجاوز توقعاتهم بامتياز.
              </p>
              
              <div className="flex justify-center">
                <a
                  href="https://wa.me/966533982399?text=مرحبًا، أريد الاستفسار عن خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-hover text-primary-foreground font-bold rounded-full px-10 py-6 text-lg shadow-[var(--shadow-glow)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  تواصل معنا الآن
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  أن نكون الشريك الاستراتيجي الأول والأكثر موثوقية للعلامات التجارية في رحلتها نحو تحقيق النمو المستدام والتميز التنافسي في العالم الرقمي.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">مهمتنا</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  تقديم حلول تسويقية إبداعية ومبتكرة بمعايير عالمية تحقق نتائج استثنائية ملموسة وقابلة للقياس والتطوير بشكل مستمر ومستدام.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 backdrop-blur-xl border-2 border-border hover:border-primary transition-all duration-300 hover-lift">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">قيمنا</h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  الإبداع والابتكار المستمر في جميع جوانب العمل التسويقي، مع الاحترافية العالية والالتزام الكامل بتحقيق أهداف عملائنا وتجاوز كل توقعاتهم بامتياز.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
