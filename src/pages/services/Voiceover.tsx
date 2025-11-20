import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Voiceover = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <img 
          src="https://i.ibb.co/RkzyVkNH/image.png" 
          alt="التعليق الصوتي الاحترافي" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            التعليق الصوتي الاحترافي
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">صوت احترافي يضيف قيمة لمحتواك</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-justify">
                في هيما تاتش، نقدم لك خدمات متخصصة احترافية في التعليق الصوتي الاحترافي بأصوات عربية متنوعة ومميزة تناسب بدقة جميع أنواع المحتوى المختلف، سواء كنت بحاجة ماسة إلى تعليق صوتي احترافي مؤثر لفيديو تسويقي ترويجي، إعلان تجاري مميز، أو محتوى تعليمي وثقافي هادف، نوفر لك دائماً أفضل وأجود الأصوات الاحترافية المدربة بجودة تسجيل عالية فائقة ووضوح تام.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">أصوات متنوعة:</strong>
                    <span className="text-muted-foreground"> نوفر مجموعة واسعة من الأصوات الذكورية والأنثوية بلهجات مختلفة.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">جودة صوت عالية:</strong>
                    <span className="text-muted-foreground"> نسجل التعليق الصوتي في استوديوهات احترافية لضمان أفضل جودة.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تسليم سريع:</strong>
                    <span className="text-muted-foreground"> نلتزم بمواعيد التسليم ونوفر التعليق الصوتي في الوقت المحدد.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تعديلات مجانية:</strong>
                    <span className="text-muted-foreground"> نقدم تعديلات مجانية لضمان رضاك التام عن النتيجة النهائية.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">اختيار الصوت:</strong>
                    <span className="text-muted-foreground"> نساعدك في اختيار الصوت المناسب لنوع محتواك وجمهورك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التسجيل والمعالجة:</strong>
                    <span className="text-muted-foreground"> نسجل التعليق الصوتي ونعالجه لضمان أفضل جودة صوتية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">التسليم:</strong>
                    <span className="text-muted-foreground"> نُسلمك الملف الصوتي بالصيغة المطلوبة جاهزًا للاستخدام.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    احصل على تعليق صوتي
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/RkzyVkNH/image.png" 
                  alt="التعليق الصوتي" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">صوت احترافي</h3>
                  <p className="text-muted-foreground mb-4">
                    أضف لمسة احترافية لمحتواك مع تعليق صوتي عالي الجودة
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

export default Voiceover;
