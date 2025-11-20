import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import analyticsIcon from "@/assets/services/analytics-icon.png";
import analyticsBanner from "@/assets/services/analytics-banner.jpg";

const AnalyticsService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة التحليلات والتقارير";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Gradient */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-8 text-xl px-8 py-3 animate-fade-in shadow-lg">
              التحليلات والتقارير
            </Badge>
            <div className="inline-flex items-center justify-center w-40 h-40 rounded-3xl bg-white shadow-2xl mb-12 hover:scale-105 transition-transform duration-300">
              <img src={analyticsIcon} alt="التحليلات والتقارير" className="w-28 h-28 object-contain" />
            </div>
          </div>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img 
              src={analyticsBanner}
              alt="التحليلات والتقارير" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section with Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction Card */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 lg:p-12 mb-8 shadow-lg">
              <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
                في هيما تاتش، نقدم متابعة نتائج الحملات الإعلانية ودراسة النتائج ومقارنة العائد على الاستثمار، ونضع الخطط بناءً على نتائج التحليل لتحقيق أفضل أداء مستدام، مما يساعدك على تحقيق مبيعات أكبر، وصول أوسع، ونمو مستدام.
              </p>
            </div>

            {/* Services Card */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-6 md:p-10 lg:p-12 mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center leading-tight">ماذا نقدّم؟</h2>
              <div className="grid gap-6">
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">متابعة الأداء الإعلاني:</strong> نراقب نتائج حملاتك باستمرار لقياس فعالية كل إعلان ومنصة.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تحليل البيانات:</strong> نستخدم أدوات تحليل متقدمة لفهم سلوك الجمهور وتحديد نقاط القوة والضعف.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">مقارنة العائد على الاستثمار (ROI):</strong> نقيس العائد من كل حملة ونقارنه بالتكاليف لتحديد الأنشطة الأكثر ربحية.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">وضع الخطط والتحسين المستمر:</strong> نعتمد على نتائج التحليل لتطوير استراتيجيات محسّنة وتحقيق نمو مستدام.
                  </p>
                </div>
                <div className="bg-background/80 backdrop-blur rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300">
                  <p className="text-lg md:text-xl text-foreground">
                    <strong className="text-primary">تقارير شاملة ومفصّلة:</strong> نقدم تقارير دورية واضحة تشمل جميع المؤشرات الرئيسية والتوصيات.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-border">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                هل أنت مستعد لتحليل أداء حملاتك الإعلانية؟
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                احصل على رؤى واضحة وقرارات مبنية على البيانات لتحقيق أفضل النتائج
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300">
                  احجز استشارتك الآن
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AnalyticsService;
