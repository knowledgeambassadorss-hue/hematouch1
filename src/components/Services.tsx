import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import brandIcon from "@/assets/services/brand-design-icon.png";
import socialIcon from "@/assets/services/social-media-icon.png";
import ecommerceIcon from "@/assets/services/ecommerce-icon.png";
import advertisingIcon from "@/assets/services/advertising-icon.png";
import analyticsIcon from "@/assets/services/analytics-icon.png";
import motionIcon from "@/assets/services/motion-graphics-icon.png";
import influencerIcon from "@/assets/services/influencer-icon.png";
import eventsIcon from "@/assets/services/events-icon.png";

const Services = () => {
  const services = [
    {
      icon: brandIcon,
      title: "تصميم العلامة التجارية",
      description: "نعمل باحترافية عالية على تصميم هوية بصرية فريدة مميزة وجذابة للعين لتعزيز قوة حضورك ومكانتك التنافسية في السوق بشكل فعال ومؤثر.",
      link: "/services/brand-design"
    },
    {
      icon: socialIcon,
      title: "إدارة وسائل التواصل الاجتماعي",
      description: "ندير جميع منصاتك بخبرة واحترافية عالية لنحول المتابعين العاديين إلى مجتمع نشط شغوف مخلص، والمحتوى الإبداعي إلى حوار تفاعلي مثمر، والحوار المستمر إلى ولاء قوي ومبيعات حقيقية متزايدة.",
      link: "/services/social-media"
    },
    {
      icon: ecommerceIcon,
      title: "إنشاء المتاجر الإلكترونية",
      description: "نصمم مواقع إلكترونية وتطبيقات ذكية ليست جميلة المظهر فحسب، بل هي آلات تحويل ذكية متطورة ترفع معدلات مبيعاتك وتحقق أهدافك التجارية بكفاءة عالية.",
      link: "/services/ecommerce"
    },
    {
      icon: advertisingIcon,
      title: "إدارة الحملات الإعلانية",
      description: "استراتيجيات إعلانية مدروسة بعناية تضع علامتك التجارية في قلب السوق المستهدف، وتجذب لك أفضل العملاء المحتملين الأكثر استعداداً للشراء والتحويل الفعلي.",
      link: "/services/advertising"
    },
    {
      icon: analyticsIcon,
      title: "التحليلات والتقارير",
      description: "متابعة دقيقة شاملة لنتائج جميع الحملات الإعلانية ودراسة تحليلية عميقة للنتائج ومقارنة دقيقة للعائد على الاستثمار، ونضع الخطط الاستراتيجية المستقبلية بناءً على نتائج التحليل الدقيق لتحقيق أفضل أساس نمو مستدام.",
      link: "/services/analytics"
    },
    {
      icon: motionIcon,
      title: "إنتاج فيديو الموشن جرافيك",
      description: "نترجم أفكارك ورسائلك المعقدة التفصيلية إلى فيديوهات موشن جرافيك آسرة مبهرة تبسط رسالتك التسويقية بطريقة إبداعية، وتترك انطباعاً بصرياً قوياً لا يُمحى في الذاكرة.",
      link: "/services/motion-graphics"
    },
    {
      icon: influencerIcon,
      title: "حملات التسويق عبر المؤثرين",
      description: "نصل بعلامتك التجارية المميزة إلى جمهور أوسع بكثير وأكثر تفاعلاً وتأثيراً من خلال حملات تسويقية مدروسة بعناية مع أفضل المؤثرين الموثوقين في مجالك.",
      link: "/services/influencer-marketing"
    },
    {
      icon: eventsIcon,
      title: "إدارة الفعاليات والسمعة",
      description: "فعالية استثنائية مميزة تعبر بوضوح عن هوية علامتك التجارية الفريدة، وتدهش جمهورك وتترك أثراً لا يُنسى في أذهانهم بطريقة احترافية.",
      link: "/services/events"
    }
  ];

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدماتكم";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="services" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-hover rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground">
            خدماتنا <span className="gradient-text">المتميزة</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify">
            نقدم مجموعة شاملة متكاملة من الخدمات التسويقية الإبداعية المتخصصة التي تساعدك بفعالية كبيرة على التميز والتفوق والنمو المستدام في عالم الأعمال الرقمي التنافسي المتطور.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="group border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift hover:shadow-[var(--shadow-premium)] bg-card/80 backdrop-blur-sm overflow-hidden h-full animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 lg:p-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 w-20 h-20 mx-auto bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base text-center">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            هل تبحث عن خدمة محددة؟
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
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
