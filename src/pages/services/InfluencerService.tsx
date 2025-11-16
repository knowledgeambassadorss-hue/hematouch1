import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import influencerIcon from "@/assets/services/influencer-icon.png";
import influencerBanner from "@/assets/services/influencer-banner.jpg";

const InfluencerService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة حملات التسويق عبر المؤثرين";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              حملات التسويق عبر المؤثرين
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <img src={influencerIcon} alt="حملات التسويق عبر المؤثرين" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={influencerBanner}
              alt="حملات التسويق عبر المؤثرين" 
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
                ابدأوا بالإعلان على سناب شات وحققوا الوصول إلى 90% من الناس بين 13-34 سنة الذين يستخدمون التطبيق للتواصل مع العائلة والأصدقاء. تواصلوا مع جمهور متميز بتفاعل عالٍ يفتح التطبيق أكثر من 30 مرة باليوم.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">لماذا الإعلان على سناب شات؟</h2>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>اجذبوا تفاعلاً حقيقياً أقوى:</strong> الناس أكثر سعادة وتقبّلاً للإعلانات على سناب شات لأنهم يشعرون بالحرية في التعبير عن أنفسهم.
                </li>
                <li className="text-lg">
                  <strong>الوصول إلى جيل الألفية وما بعده:</strong> أكثر من 90% من الشباب بين 13 و34 سنة يتواصلون مع الأصدقاء والمؤثرين والشركات.
                </li>
                <li className="text-lg">
                  <strong>تواجدوا حيث يتواجد التسوق الاجتماعي:</strong> يعتبر سناب شات المنصة الأولى لمشاركة المشتريات ولحظات التسوق، بقدرة شرائية تصل إلى تريليونات الدولارات عالمياً.
                </li>
                <li className="text-lg">
                  <strong>إعلانكم جاهز خلال دقائق:</strong> ما عليكم سوى التواصل معنا واختيار طريقة الإعلان التي تريدونها (صورة أو فيديو) أو إنشاء إعلانٍ حي مع المؤثرين الموثقين.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">حقّقوا أكبر استفادة من ميزانيتكم</h2>
              <p className="text-lg text-foreground">
                نساعدكم على تحقيق أهدافكم سواء كانت زيادة الوعي بعلامتكم التجارية، جذب الاهتمام بمنتجاتكم، أو تحقيق التحويلات والمبيعات المباشرة.
              </p>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  ابدأ حملتك الآن
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

export default InfluencerService;
