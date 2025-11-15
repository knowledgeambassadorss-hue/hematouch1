import { useEffect, useRef, useState } from "react";
import eventBanner from "@/assets/event-banner.png";
import successPartners from "@/assets/success-partners.png";
import exhibition1 from "@/assets/exhibition-1.png";
import exhibition2 from "@/assets/exhibition-2.png";
import exhibition3 from "@/assets/exhibition-3.png";
import exhibition4 from "@/assets/exhibition-4.png";
import exhibition5 from "@/assets/exhibition-5.png";

const EventManagement = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (!isUserScrolling && scrollContainer) {
        scrollAmount += 0.5;
        
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    const handleScroll = () => {
      setIsUserScrolling(true);
      scrollAmount = scrollContainer.scrollLeft;
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsUserScrolling(false);
      }, 2000);
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    scrollContainer.addEventListener('touchstart', () => setIsUserScrolling(true), { passive: true });
    scrollContainer.addEventListener('mousedown', () => setIsUserScrolling(true));

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchstart', () => setIsUserScrolling(true));
      scrollContainer.removeEventListener('mousedown', () => setIsUserScrolling(true));
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isUserScrolling]);

  return (
    <section id="event-management" className="py-12 md:py-24 bg-background overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            نماذج <span className="text-primary">أعمالنا وشركاء النجاح</span>
          </h2>
        </div>

        {/* Horizontal Scrolling Exhibition Gallery */}
        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
            }}
          >
            <div className="flex gap-4 md:gap-6 px-4 md:px-8 py-4" style={{ minWidth: 'min-content' }}>
              {[eventBanner, successPartners, exhibition1, exhibition2, exhibition3, exhibition4, exhibition5].map((img, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] rounded-xl md:rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-intense)] transition-all duration-500 hover:scale-[1.02] group"
                  style={{
                    scrollSnapAlign: 'center',
                  }}
                >
                  <img 
                    src={img} 
                    alt={`معرض ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-muted/50"></div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default EventManagement;
