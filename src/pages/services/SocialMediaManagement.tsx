import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SocialMediaManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <img 
          src="https://i.ibb.co/kVbXJz9v/Gemini-Generated-Image-o9wieto9wieto9wi.jpg" 
          alt="إدارة حسابات التواصل الاجتماعي" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            إدارة حسابات التواصل الاجتماعي
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">حضور قوي على منصات التواصل الاجتماعي</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نقدم خدمات إدارة حسابات التواصل الاجتماعي لمساعدتك على بناء حضور قوي، زيادة التفاعل مع جمهورك، وتحقيق أهدافك التسويقية. نعمل على إنشاء محتوى جذاب، التفاعل مع المتابعين، وتحليل الأداء لضمان تحقيق أفضل النتائج.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إنشاء محتوى إبداعي:</strong>
                    <span className="text-muted-foreground"> نُنتج محتوى جذاب يشمل التصميمات، الفيديوهات، والنصوص التسويقية التي تعكس هوية علامتك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">جدولة المنشورات:</strong>
                    <span className="text-muted-foreground"> نُنظم جدول نشر منتظم يضمن تفاعلًا مستمرًا مع جمهورك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التفاعل مع المتابعين:</strong>
                    <span className="text-muted-foreground"> نرد على التعليقات والرسائل بشكل احترافي وسريع لبناء علاقة قوية مع جمهورك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحليل الأداء والتقارير:</strong>
                    <span className="text-muted-foreground"> نقدم تقارير شهرية توضح معدل التفاعل، نمو المتابعين، وتوصيات للتحسين.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">فهم علامتك التجارية:</strong>
                    <span className="text-muted-foreground"> نبدأ بدراسة هوية علامتك، جمهورك المستهدف، وأهدافك التسويقية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">وضع استراتيجية المحتوى:</strong>
                    <span className="text-muted-foreground"> نُنشئ خطة محتوى مخصصة تشمل نوع المنشورات، التوقيت، والرسائل التسويقية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">البدء في الإدارة والمتابعة:</strong>
                    <span className="text-muted-foreground"> نبدأ في نشر المحتوى، التفاعل مع الجمهور، وتحليل النتائج لتحسين الأداء باستمرار.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    ابدأ الإدارة الاحترافية
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/kVbXJz9v/Gemini-Generated-Image-o9wieto9wieto9wi.jpg" 
                  alt="إدارة السوشيال ميديا" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">حضور قوي</h3>
                  <p className="text-muted-foreground mb-4">
                    دعنا نُدير حساباتك ونبني لك جمهورًا متفاعلًا ومخلصًا
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

export default SocialMediaManagement;
