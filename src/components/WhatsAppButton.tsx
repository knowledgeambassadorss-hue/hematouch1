import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "966533982399";
  const message = "مرحباً، أريد الاستفسار عن خدماتكم";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
};

export default WhatsAppButton;
