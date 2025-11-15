import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const InfluencerMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
        <img 
          src="https://i.ibb.co/0j2Y8h2z/image-22.png" 
          alt="حملات التسويق عبر المؤثرين" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            حملات التسويق عبر المؤثرين
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-foreground">وصول أوسع عبر المؤثرين</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                في هيما تاتش، نقدم خدمات التسويق عبر المؤثرين لمساعدتك على الوصول إلى جمهور أوسع وبناء ثقة قوية مع عملائك المحتملين. نعمل مع مجموعة واسعة من المؤثرين في مختلف المجالات لضمان تحقيق أهدافك التسويقية.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-foreground">ماذا نقدم؟</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">اختيار المؤثرين المناسبين:</strong>
                    <span className="text-muted-foreground"> نحدد المؤثرين الذين يتناسبون مع علامتك التجارية وجمهورك المستهدف.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إدارة الحملات:</strong>
                    <span className="text-muted-foreground"> نُنظم ونُدير الحملات من البداية إلى النهاية، بما في ذلك المفاوضات والتنسيق.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إنشاء محتوى إبداعي:</strong>
                    <span className="text-muted-foreground"> نعمل مع المؤثرين لإنتاج محتوى أصيل وجذاب يعكس قيم علامتك.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">قياس النتائج:</strong>
                    <span className="text-muted-foreground"> نقدم تقارير مفصلة عن أداء الحملة، معدل التفاعل، والعائد على الاستثمار.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-foreground">رحلتك معنا</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">تحديد الأهداف:</strong>
                    <span className="text-muted-foreground"> نبدأ بفهم أهدافك، ميزانيتك، والجمهور المستهدف.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">اختيار المؤثرين:</strong>
                    <span className="text-muted-foreground"> نحدد أفضل المؤثرين الذين يتناسبون مع علامتك التجارية.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong className="text-foreground">إطلاق الحملة والمتابعة:</strong>
                    <span className="text-muted-foreground"> نبدأ الحملة ونراقب الأداء لضمان تحقيق أفضل النتائج.</span>
                  </div>
                </li>
              </ul>

              <div className="mt-12">
                <Link to="/#contact">
                  <Button size="lg" className="group">
                    ابدأ حملتك الآن
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <img 
                  src="https://i.ibb.co/0j2Y8h2z/image-22.png" 
                  alt="التسويق عبر المؤثرين" 
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-4 text-foreground">حملة مؤثرة</h3>
                  <p className="text-muted-foreground mb-4">
                    تواصل مع جمهور أوسع وبني ثقة قوية عبر المؤثرين المناسبين
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

export default InfluencerMarketing;
