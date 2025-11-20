import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import eventBanner from "@/assets/event-banner.png";
import successPartnersFull from "@/assets/success-partners-full.png";
import exhibitionStand1 from "@/assets/exhibition-stand-1.png";
import exhibitionStand2 from "@/assets/exhibition-stand-2.png";
import exhibitionStand3 from "@/assets/exhibition-stand-3.png";
import exhibitionStand4 from "@/assets/exhibition-stand-4.png";
import exhibitionStand5 from "@/assets/exhibition-stand-5.png";
import eventVideoSanofi from "@/assets/event-video-sanofi.jpg";
import eventVideoDupixent from "@/assets/event-video-dupixent.jpg";
import eventVideoSoliqua from "@/assets/event-video-soliqua.jpg";

const EventManagement = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const exhibitionSlides = [
    { img: exhibitionStand1, alt: "Exhibition Stand 1" },
    { img: exhibitionStand2, alt: "Exhibition Stand 2" },
    { img: exhibitionStand3, alt: "Exhibition Stand 3" },
    { img: exhibitionStand4, alt: "Exhibition Stand 4" },
    { img: exhibitionStand5, alt: "Exhibition Stand 5" },
  ];

  const eventVideos = [
    {
      name: "Sanofi",
      img: eventVideoSanofi,
      videoUrl: "https://www.linkedin.com/posts/mustafa-fouad-046419b9_ksa2023-ksaevents-productionservices-activity-7135731236429254656-_i50?utm_source=share&utm_medium=member_android&rcm=ACoAABkoDfYBCrlNVIQjlhnbK6mo5phuLMpvAdQ",
    },
    {
      name: "DUPIXENT",
      img: eventVideoDupixent,
      videoUrl: "https://www.linkedin.com/posts/mustafa-fouad-046419b9_ksa2023-events2023-operationmanagement-activity-7076183914007998464-9z9l?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAABkoDfYBCrlNVIQjlhnbK6mo5phuLMpvAdQ&utm_campaign=share_via",
    },
    {
      name: "SOLIQUA",
      img: eventVideoSoliqua,
      videoUrl: "https://www.linkedin.com/posts/mustafa-fouad-046419b9_ksa2023-events2023-eventsmanagement-activity-7066002712584237056-0OsQ?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAABkoDfYBCrlNVIQjlhnbK6mo5phuLMpvAdQ&utm_campaign=share_via",
    },
  ];

  return (
    <section id="event-management" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Banner */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img 
              src={eventBanner}
              alt="Event Management Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section Header & Description */}
        <div className="text-center mb-12 md:mb-16 max-w-5xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-6">
            إدارة الفعاليات <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">و المعارض</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify-balanced">
            نحوّل تواجد علامتك التجارية على أرض الواقع إلى تجربة مباشرة وملموسة،
            في المؤتمرات ننظم الفعاليات بالكامل، نوزع هدايا، ونوفّر البانرات والبروشورات وأجهزة الصوت وشاشات العرض التي تبرز علامتك التجارية بشكل احترافي،
            أما في المعارض نصمم قسم العرض وديكوراته وشاشاته ولافتاته بالكامل لضمان تجربة جذابة تترك انطباعًا قويًا لدى الزوار،
            سواء كان الحدث كبيرًا أو متوسطًا،
            نحن نهتم بأدق التفاصيل لضمان تجربة متميزة ومتكاملة تحقق أهدافك،
            بهذا تستطيع تعزيز التواصل المباشر مع جمهورك وبناء انطباع قوي يدوم.
          </p>
        </div>

        {/* Exhibition Stands Carousel */}
        <div className="relative max-w-7xl mx-auto mb-20">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
            }}
          >
            <div className="flex">
              {exhibitionSlides.map((slide, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full px-2 md:px-4"
                  style={{
                    scrollSnapAlign: 'center',
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-premium)] transition-all duration-500 bg-card border-2 border-border/50 hover:border-primary/50">
                    <img 
                      src={slide.img}
                      alt={slide.alt}
                      className="w-full h-auto object-contain max-h-[70vh] bg-background"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Videos Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {eventVideos.map((event, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-premium)] transition-all duration-500 border-2 border-border/50 hover:border-primary/50"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={event.img}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground text-center">{event.name}</h3>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(event.videoUrl, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 ml-2" />
                    مشاهدة الفيديو
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Partners Section */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-8">
            <span className="text-primary bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">شركاء النجاح</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={successPartnersFull}
                alt="Success Partners"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventManagement;
