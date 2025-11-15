import { Megaphone, Palette, Video, Code, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "الحملات الإعلانية",
      description: "استراتيجيات تسويقية مبتكرة تضمن وصولك لجمهورك المستهدف وزيادة مبيعاتك بشكل ملحوظ.",
      link: "/services/advertising-campaigns"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "الهوية البصرية",
      description: "تصاميم عصرية وجذابة تعكس هويتك التجارية وتترك انطباعاً لا يُنسى لدى عملائك.",
      link: "/services/visual-identity"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "الموشن جرافيك",
      description: "فيديوهات احترافية ومونتاج إبداعي يروي قصتك بطريقة تجذب الانتباه وتحقق التفاعل.",
      link: "/services/motion-graphics"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "تطوير المواقع",
      description: "مواقع إلكترونية متطورة وسريعة، مصممة خصيصاً لتحقيق أهدافك التجارية.",
      link: "/services/web-development"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "إدارة السوشيال ميديا",
      description: "إدارة احترافية لحساباتك على منصات التواصل الاجتماعي مع محتوى جذاب ومتابعة مستمرة.",
      link: "/services/social-media"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "الاستشارات التسويقية",
      description: "استشارات متخصصة لتطوير استراتيجياتك التسويقية وتحقيق أهدافك بأفضل الطرق.",
      link: "/services/consulting"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            خدماتنا <span className="text-primary">المتميزة</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات الإبداعية التي تساعدك على التميز والنمو في عالم الأعمال الرقمي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="group border-2 hover:border-primary transition-all duration-300 hover-lift hover:shadow-[var(--shadow-elegant)] bg-card overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            هل تبحث عن خدمة محددة؟
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
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all duration-300 cursor-pointer"
          >
            تواصل معنا للمزيد
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
