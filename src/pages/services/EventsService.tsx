import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import eventsIcon from "@/assets/services/events-icon.png";
import eventsBanner from "@/assets/services/events-banner.jpg";

const EventsService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatsappNumber = "966533982399";
  const whatsappMessage = "مرحباً، أريد الاستفسار عن خدمة إدارة الفعاليات والسمعة";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
              إدارة الفعاليات والسمعة
            </Badge>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl bg-white shadow-lg mb-8">
              <img src={eventsIcon} alt="إدارة الفعاليات والسمعة" className="w-20 h-20 object-contain" />
            </div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={eventsBanner}
              alt="إدارة الفعاليات والسمعة" 
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
                في HEMA Touch، نجمع بين الإبداع والتنفيذ المحترف لبناء تجربة متكاملة — من الفكرة إلى اللحظة الختامية — بحيث يظل الحدث في الذاكرة.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ماذا نقدّم؟</h2>
              <ul className="space-y-4 text-foreground">
                <li className="text-lg">
                  <strong>إعداد وتنظيم الحدث:</strong> نبدأ بتحليل أهدافك وجمهورك، ونضع خطة كاملة تشمل الفكرة الإبداعية والتصميم البصري وتجربة الحضور.
                </li>
                <li className="text-lg">
                  <strong>إدارة التنفيذ في الموقع:</strong> نُشرف على كل تفاصيل اليوم — من تجهيز المكان والصوت والإضاءة، إلى تنسيق الفرق والضيوف، لضمان سير الحفل بسلاسة واحتراف.
                </li>
                <li className="text-lg">
                  <strong>تصميم هوية بصرية مخصصة للفعالية:</strong> نُبتكر شعاراً مؤقتاً، دعوات، ديكورات، مواد ترويجية تحمل بصمة علامتك وتتماشى مع هويتك.
                </li>
                <li className="text-lg">
                  <strong>الترويج والتغطية الإعلامية:</strong> نُشغّل الحملات الرقمية قبل وأثناء وبعد، مع تغطية فوتوغرافية وفيديو احترافية — لإبراز الحدث والدفع بنتائجك.
                </li>
                <li className="text-lg">
                  <strong>تحليل النتائج والتقارير:</strong> بعد انتهاء الفعالية، نقدّم تقريراً مفصّلاً عن الحضور، التفاعل، والأثر التسويقي — لتتطلع بخبرة قيّمة من كل تجربة.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">أسئلة شائعة</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">ما أنواع الفعاليات التي تنظمونها؟</h3>
                  <p className="text-lg text-muted-foreground">نشرف على جميع الفعاليات، إطلاق العلامات التجارية، المعارض، الاحتفالات الخاصة والعامة — باحترافية عالية وطاقم متخصص.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">هل يمكنكم تنفيذ الفعالية في أي مدينة؟</h3>
                  <p className="text-lg text-muted-foreground">نعم، نعمل في جميع المدن بالتعاون مع شركائنا المحليين لضمان تجربة HEMA Touch أينما كانت الفعالية.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">أيمكن الاستعانة بخدمة تصميم الهوية فقط دون التنفيذ؟</h3>
                  <p className="text-lg text-muted-foreground">بالتأكيد، نُقدّم باقات مرنة تشمل تصميم الهوية أو التغطية الإعلامية فقط، حسب احتياجك.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  ابدأ فعاليتك الآن
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

export default EventsService;
