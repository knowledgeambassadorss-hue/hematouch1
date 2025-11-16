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
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              التحليلات والتقارير
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <img src={analyticsIcon} alt="التحليلات والتقارير" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={analyticsBanner}
              alt="التحليلات والتقارير" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                في هيما تاتش، نقدم متابعة نتائج الحملات الإعلانية ودراسة النتائج ومقارنة العائد على الاستثمار، ونضع الخطط بناءً على نتائج التحليل لتحقيق أفضل أداء مستدام، مما يساعدك على تحقيق مبيعات أكبر، وصول أوسع، ونمو مستدام.
              </p>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  احجز استشارتك الآن
                </a>
              </div>
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
