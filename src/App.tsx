import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import AdvertisingCampaigns from "./pages/services/AdvertisingCampaigns";
import SEO from "./pages/services/SEO";
import VisualIdentity from "./pages/services/VisualIdentity";
import EcommerceStores from "./pages/services/EcommerceStores";
import MotionGraphics from "./pages/services/MotionGraphics";
import Voiceover from "./pages/services/Voiceover";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import Consulting from "./pages/services/Consulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/advertising-campaigns" element={<AdvertisingCampaigns />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/visual-identity" element={<VisualIdentity />} />
          <Route path="/services/ecommerce-stores" element={<EcommerceStores />} />
          <Route path="/services/motion-graphics" element={<MotionGraphics />} />
          <Route path="/services/voiceover" element={<Voiceover />} />
          <Route path="/services/social-media" element={<SocialMediaManagement />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
          <Route path="/services/consulting" element={<Consulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
