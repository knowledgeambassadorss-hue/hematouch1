import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MotionGraphics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <img 
          src="https://i.ibb.co/mVtFytS0/Gemini-Generated-Image-nl8291nl8291nl82.jpg" 
          alt="إنتاج فيديو الموشن جرافيك" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            إنتاج فيديو الموشن جرافيك
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">فيديوهات إبداعية تخطف الأنظار</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نقدم خدمات إنتاج فيديوهات الموشن جرافيك الاحترافية التي تساعدك على توصيل رسالتك بطريقة جذابة ومؤثرة. نستخدم أحدث التقنيات والأدوات لإنتاج فيديوهات عالية الجودة تعزز من تفاعل جمهورك وتحقق أهدافك التسويقية.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">كتابة السيناريو:</strong>
                    <span className="text-muted-foreground"> نُنشئ سيناريوهات إبداعية تروي قصتك بطريقة مشوقة وواضحة.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التصميم والرسوم المتحركة:</strong>
                    <span className="text-muted-foreground"> نُصمم رسومات متحركة احترافية تعكس هوية علامتك التجارية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التعليق الصوتي والمؤثرات:</strong>
                    <span className="text-muted-foreground"> نضيف تعليقًا صوتيًا احترافيًا ومؤثرات صوتية تعزز من جودة الفيديو.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التنسيق والإخراج النهائي:</strong>
                    <span className="text-muted-foreground"> نُنهي الفيديو بأعلى جودة ونُسلمه جاهزًا للنشر على جميع المنصات.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">فهم الهدف:</strong>
                    <span className="text-muted-foreground"> نبدأ بفهم رسالتك، جمهورك المستهدف، والهدف من الفيديو.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">كتابة السيناريو والتصميم:</strong>
                    <span className="text-muted-foreground"> نُنشئ سيناريو مبتكر ونبدأ في تصميم الرسوم المتحركة.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">الإنتاج والتسليم:</strong>
                    <span className="text-muted-foreground"> نُنتج الفيديو بأعلى جودة ونُسلمه جاهزًا للاستخدام.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    ابدأ مشروعك الآن
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/mVtFytS0/Gemini-Generated-Image-nl8291nl8291nl82.jpg" 
                  alt="الموشن جرافيك" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">فيديو احترافي</h3>
                  <p className="text-muted-foreground mb-4">
                    احصل على فيديو موشن جرافيك يروي قصتك بطريقة إبداعية ومؤثرة
                  </p>
                  <Link to="/#contact">
                    <Button className="w-full">تواصل معنا</Button>
                  </Link>
                </div>
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

export default MotionGraphics;
