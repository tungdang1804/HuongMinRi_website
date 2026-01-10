import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X, Facebook, Phone, ChevronUp, Star, Heart, MessageSquareQuote, ThumbsUp, Gift, Sparkles, BookOpen } from 'lucide-react';
import { 
  BRANCHES, 
  GALLERY_IMAGES, 
  SERVICES, 
  LOGO_URL, 
  FB_LINK, 
  HERO_IMAGE_URL,
  EVENT_CONFIG,
  PROMOTION_CATALOGUE,
  SHOW_PROMOTION_POPUP,
  FOOTER_LOGO_URL,
  DEFAULT_TIKTOK_ICON_URL,
  TIKTOK_LINK,
  TIMELINE_EVENTS,
  XMAS_TREE_URL,
  GUIDE_IMAGES,
  THEME_BG_CLASSES
} from './constants';
import { BranchCard } from './components/BranchCard';
import { SparkleIcon, FrenchCurveDivider } from './components/Decoration';
import { EventDecoration } from './components/EventDecoration';
import { PromotionPopup } from './components/PromotionPopup';
import { ReviewModal } from './components/ReviewModal';
import { TimelineModal } from './components/TimelineModal';
import { GuideModal } from './components/GuideModal';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [isDecorEnabled, setIsDecorEnabled] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const themeStyles = useMemo(() => {
    return THEME_BG_CLASSES[EVENT_CONFIG.theme] || THEME_BG_CLASSES.none;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(prev => {
        if (prev !== isScrolled) return isScrolled;
        return prev;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (SHOW_PROMOTION_POPUP) {
      const timer = setTimeout(() => setShowPromo(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDecoration = useCallback(() => {
    setIsDecorEnabled(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-brand selection:text-white font-body">
      
      <EventDecoration config={{
        ...EVENT_CONFIG, 
        showStickers: isDecorEnabled && EVENT_CONFIG.showStickers,
        showFallingEffect: isDecorEnabled && EVENT_CONFIG.showFallingEffect
      }} />
      
      <PromotionPopup 
        isOpen={showPromo} 
        promotions={PROMOTION_CATALOGUE} 
        onClose={() => setShowPromo(false)} 
      />

      <ReviewModal 
        isOpen={isReviewModalOpen}
        branches={BRANCHES}
        onClose={() => setIsReviewModalOpen(false)}
      />

      <TimelineModal 
        isOpen={isTimelineOpen}
        events={TIMELINE_EVENTS}
        onClose={() => setIsTimelineOpen(false)}
      />

      <GuideModal 
        isOpen={isGuideOpen}
        images={GUIDE_IMAGES}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-1' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center cursor-pointer active:scale-95 transition-transform" 
              onClick={scrollToTop}
            >
              <img 
                src={isDecorEnabled ? LOGO_URL : FOOTER_LOGO_URL} 
                alt="Hương MinRi Logo" 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300" 
                fetchPriority="high"
              />
            </div>

            <div className="hidden md:flex flex-col items-end">
              <div className="flex space-x-4 lg:space-x-6 items-center mb-2">
                {['Dịch Vụ', 'Thư Viện', 'Liên Hệ'].map((item, idx) => {
                  const ids = ['services', 'gallery', 'contact'];
                  return (
                    <button 
                      key={item}
                      onClick={() => scrollToSection(ids[idx])}
                      className={`text-sm font-semibold uppercase tracking-wider hover:text-brand transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-800 bg-white/60 px-4 py-1.5 rounded-full'}`}
                    >
                      {item}
                    </button>
                  )
                })}
                <a 
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="bg-brand text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-md hover:bg-brand-dark transition-all hover:scale-105"
                >
                  Liên Hệ Ngay
                </a>
              </div>
              
              {/* Universal Tet Banner - Brighter Red, White Text, Coin Pattern */}
              {isDecorEnabled && EVENT_CONFIG.theme === 'tet' && (
                <div className="relative group overflow-visible">
                  <div className="bg-red-500 bg-coin-pattern transform -skew-x-12 px-6 py-2 shadow-xl border-l-4 border-yellow-400 animate-pulse-slow">
                    <div className="transform skew-x-12 text-white font-black text-[11px] lg:text-sm uppercase tracking-[0.15em] whitespace-nowrap drop-shadow-md">
                      Hương MinRi Chúc Mừng Năm Mới 2026
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"></div>
                </div>
              )}
            </div>

            <div className="md:hidden flex flex-col items-end gap-1">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-brand p-2 rounded-md hover:bg-brand/10 transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              {!isMenuOpen && isDecorEnabled && EVENT_CONFIG.theme === 'tet' && (
                <div className="bg-red-500 bg-coin-pattern transform -skew-x-12 px-3 py-1.5 shadow-md border-l-2 border-yellow-400">
                  <div className="transform skew-x-12 text-white font-bold text-[9px] uppercase tracking-wider whitespace-nowrap">
                    Hương MinRi Chúc Mừng Năm Mới 2026
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 animate-fade-in-down overflow-hidden">
            <div className="flex flex-col p-6 space-y-4">
              {['Dịch Vụ', 'Thư Viện', 'Liên Hệ'].map((item, idx) => {
                 const ids = ['services', 'gallery', 'contact'];
                 return (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(ids[idx])}
                    className="text-left text-lg font-bold text-gray-800 py-3 border-b border-gray-50 hover:text-brand transition-colors"
                  >
                    {item}
                  </button>
                 )
              })}
              
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="bg-brand text-white py-3 rounded-xl font-bold text-center text-lg shadow-lg"
              >
                Liên Hệ Ngay
              </a>
              
              {/* Tet Banner Mobile - Brighter Red, White Text, Coin Pattern */}
              {isDecorEnabled && EVENT_CONFIG.theme === 'tet' && (
                <div className="bg-red-500 bg-coin-pattern transform -skew-x-6 py-4 px-4 shadow-inner text-center border-l-8 border-yellow-400 animate-pulse">
                   <div className="transform skew-x-6 text-white font-black text-sm tracking-widest uppercase">
                      HƯƠNG MINRI CHÚC MỪNG NĂM MỚI 2026
                   </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className={`relative pt-32 pb-12 md:pt-48 md:pb-32 px-4 overflow-x-clip ${themeStyles.hero}`}>
        <div className="absolute top-20 right-10 text-brand/10 animate-pulse">
           <SparkleIcon className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 left-10 text-brand/5">
           <SparkleIcon className="w-32 h-32 rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left animate-fade-in-up">
            <span className={`inline-block px-4 py-1 bg-white/80 ${themeStyles.text} text-sm font-semibold rounded-full tracking-wider mb-2 border border-brand/20`}>
              {EVENT_CONFIG.theme === 'tet' ? 'TẾT ĐOÀN VIÊN - NAIL XINH RẠNG RỠ' : 'WELCOME TO HƯƠNG MINRI'}
            </span>
            <h1 className={`font-signature text-6xl md:text-7xl lg:text-8xl ${themeStyles.text} leading-tight drop-shadow-sm`}>
              Nail Art & <br/> <span className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-body font-light">Salon Spa</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Nơi vẻ đẹp được chăm chút tỉ mỉ từng chi tiết. Trải nghiệm phong cách Nail sang trọng và dịch vụ Gội Đầu Dưỡng Sinh, Massage Cổ-Vai-Gáy thư giãn, đánh tan mọi mệt mỏi, đau nhức.
            </p>
            
            {/* HERO BUTTONS - Brighter Red Background, White Text, Gold Border, Coin Pattern */}
            <div className="flex flex-row gap-3 justify-center md:justify-start pt-4 items-center w-full max-w-md mx-auto md:mx-0">
              <button 
                onClick={() => setIsTimelineOpen(true)}
                className="bg-red-500 bg-coin-pattern text-white border-2 border-yellow-400 px-4 md:px-6 py-3 rounded-2xl font-black hover:bg-red-600 transition-all text-center flex items-center justify-center gap-2 shadow-lg flex-1 whitespace-nowrap h-full uppercase tracking-wide hover:scale-105 active:scale-95"
              >
                <Gift size={20} className="text-white hidden sm:block" />
                Khuyến Mãi
              </button>
              <button 
                onClick={() => setIsGuideOpen(true)}
                className="bg-red-500 bg-coin-pattern text-white border-2 border-yellow-400 px-4 md:px-6 py-3 rounded-2xl text-xs md:text-sm font-black hover:bg-red-600 transition-all text-center flex items-center justify-center gap-2 shadow-lg flex-1 leading-tight h-full uppercase tracking-tight hover:scale-105 active:scale-95"
              >
                <BookOpen size={18} className="text-white hidden sm:block" />
                Hướng Dẫn đặt lịch Tết
              </button>
            </div>
          </div>

          <div className="relative">
             <div className={`absolute inset-0 ${EVENT_CONFIG.theme === 'tet' ? 'bg-red-200/50' : 'bg-brand-pink'} rounded-[40%_60%_70%_30%/40%_50%_60%_50%] rotate-3 transform translate-x-4 translate-y-4`}></div>
             <img 
               src={HERO_IMAGE_URL} 
               alt="Hero Nail Art" 
               className="relative rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-2xl w-full h-[400px] md:h-[500px] object-cover object-top -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white"
               fetchPriority="high"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 max-w-[200px] border border-gray-100 z-10">
                <div className="bg-brand-beige p-2 rounded-full text-brand">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Đánh giá cao</p>
                  <p className="font-bold text-gray-800">Dịch vụ uy tín</p>
                </div>
             </div>

             <button 
               onClick={() => setIsReviewModalOpen(true)}
               className="absolute -bottom-6 -right-4 md:-bottom-24 md:-left-6 md:right-auto bg-white/90 backdrop-blur-md py-2 px-4 md:py-3 md:px-6 rounded-full shadow-2xl flex items-center space-x-2 md:space-x-3 border-2 border-white hover:border-brand-pink/50 hover:scale-105 transition-all duration-300 group cursor-pointer z-20"
             >
                <div className="bg-brand-beige p-1.5 md:p-2 rounded-full text-brand group-hover:text-yellow-500 transition-colors">
                  <Star className="drop-shadow-sm w-3.5 h-3.5 md:w-[18px] md:h-[18px]" fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className={`font-signature text-lg md:text-xl ${themeStyles.text} leading-none`}>Đánh Giá</p>
                  <span className="font-medium text-gray-600 text-[10px] md:text-xs tracking-wide block">Trải Nghiệm Của Bạn</span>
                </div>
             </button>
          </div>
        </div>
      </header>

      {/* French Divider 1 */}
      <div className="relative w-full z-20 -mt-1">
        <FrenchCurveDivider fillClass={themeStyles.accent} direction="down" />
      </div>

      {/* Services Section */}
      <section id="services" className={`py-24 ${themeStyles.accent} relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
             <h2 className={`font-signature text-5xl ${themeStyles.text}`}>Dịch Vụ Của Chúng Tôi</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Chăm sóc toàn diện từ móng tay đến mái tóc với phong cách nhẹ nhàng.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-t-full rounded-b-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border-b-4 border-brand hover:-translate-y-2">
                <div className={`w-16 h-16 ${EVENT_CONFIG.theme === 'tet' ? 'bg-red-50' : 'bg-brand-pink'} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-brand group-hover:text-white transition-colors duration-300`}>
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-brand group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* French Divider 2 */}
      <div className="relative w-full z-20 -mt-1">
        <FrenchCurveDivider fillClass={themeStyles.section} direction="down" />
      </div>

      {/* Gallery Section */}
      <section id="gallery" className={`py-24 ${themeStyles.section} relative overflow-hidden`}>
        <SparkleIcon className="absolute top-10 left-10 w-16 h-16 text-white/40" />
        <SparkleIcon className="absolute bottom-20 right-10 w-24 h-24 text-white/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
               <h2 className={`font-signature text-5xl ${themeStyles.text} mb-2`}>Thư Viện Ảnh</h2>
               <p className="text-gray-600">Những tác phẩm nail art tinh tế.</p>
            </div>
            <a href={FB_LINK} target="_blank" rel="noreferrer" className="bg-white text-brand px-6 py-2 rounded-full font-semibold hover:bg-brand hover:text-white transition-colors shadow-sm">
              Xem thêm trên Facebook &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {GALLERY_IMAGES.map((img, index) => (
              <div 
                key={img.id} 
                className={`relative group rounded-2xl overflow-hidden shadow-md border-4 border-white ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1'}`}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-lg">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* French Divider 3 */}
      <div className="relative w-full z-20 -mt-1">
        <FrenchCurveDivider fillClass="text-white" direction="down" />
      </div>

      {/* Contact & Locations Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`font-signature text-5xl ${themeStyles.text} mb-4`}>Liên Hệ & Đặt Lịch</h2>
            <p className="text-gray-600">Hãy chọn chi nhánh gần bạn nhất để được phục vụ tốt nhất</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BRANCHES.map((branch, index) => (
              <BranchCard key={branch.id} branch={branch} index={index} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-brand to-brand-light rounded-t-[3rem] rounded-b-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-brand/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pattern-dots"></div>
            
            <div className="relative z-10 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Bạn muốn trải nghiệm dịch vụ?</h3>
              <p className="text-white/80">Nhắn tin ngay cho chúng tôi để được tư vấn miễn phí.</p>
            </div>
            
            <div className="relative z-10 flex gap-4">
              <a 
                href={FB_LINK}
                target="_blank"
                rel="noreferrer" 
                className="bg-white text-brand px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-pink transition-colors flex items-center"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Chat Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${themeStyles.accent} pt-16 pb-8 border-t border-brand/10 relative overflow-hidden`}>
        {isDecorEnabled && EVENT_CONFIG.theme === 'christmas' && (
          <img 
            src={XMAS_TREE_URL} 
            alt="Christmas Tree" 
            className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-90 pointer-events-none z-0 object-contain"
            loading="lazy"
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src={FOOTER_LOGO_URL} alt="Logo" loading="lazy" className="h-64 mb-4 object-contain" />
              <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
                Hương MinRi - Nơi tôn vinh vẻ đẹp của bạn. Chuyên nghiệp, tận tâm và luôn cập nhật xu hướng nail art mới nhất.
              </p>
              <div className="flex space-x-4">
                <a href={FB_LINK} className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors shadow-sm">
                  <Facebook size={20} />
                </a>
                <a href={`tel:0937787807`} className="w-10 h-10 bg-white border border-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:border-brand hover:text-brand transition-colors shadow-sm">
                  <Phone size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-brand mb-4 uppercase tracking-wider text-sm border-b-2 border-brand-pink inline-block pb-1">Liên kết nhanh</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-brand transition-colors">Dịch vụ</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-brand transition-colors">Thư viện ảnh</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-brand transition-colors">Đặt lịch</button></li>
                <li>
                  <button onClick={() => setIsReviewModalOpen(true)} className="text-brand font-bold hover:underline flex items-center">
                    <MessageSquareQuote size={16} className="mr-1" /> Đánh giá dịch vụ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand mb-4 uppercase tracking-wider text-sm border-b-2 border-brand-pink inline-block pb-1">Giờ mở cửa</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between border-b border-brand/5 pb-2">
                  <span>Thứ 2 - CN:</span>
                  <span className="font-medium text-brand">9:00 - 21:00</span>
                </li>
                <li className="text-sm mt-4 text-brand-light italic">
                  *Vui lòng đặt lịch trước để được phục vụ tốt nhất.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Hương MinRi Nail & Spa.</p>
            <p className="mt-2 md:mt-0 flex items-center">
              Thiết kế bởi <span className="font-signature text-lg text-brand ml-1">Hương MinRi</span> <Heart size={12} className="mx-1 text-red-400 fill-current" />
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Social Icons */}
      <div className="fixed bottom-20 md:bottom-[280px] lg:bottom-8 right-6 z-50 flex flex-col items-center gap-4">
          <a 
            href={FB_LINK}
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 md:w-20 md:h-20 lg:w-32 lg:h-32 flex items-center justify-center hover:scale-110 transition-transform duration-300 drop-shadow-xl p-3 md:p-5"
          >
             <Facebook className="text-[#1877F2] w-full h-full" fill="currentColor" strokeWidth={0} />
          </a>
          
          <a 
            href={TIKTOK_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 md:w-20 md:h-20 lg:w-32 lg:h-32 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
          >
            <img src={DEFAULT_TIKTOK_ICON_URL} alt="TikTok" className="w-full h-full object-contain" />
          </a>
      </div>

      {/* Decoration Toggle */}
      <button 
        onClick={toggleDecoration}
        className={`fixed bottom-20 md:bottom-6 left-6 bg-white text-brand p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 z-40 border-2 border-brand hover:scale-110 group`}
      >
        <Sparkles size={24} className={`transition-all duration-300 ${isDecorEnabled ? 'fill-brand text-brand' : 'fill-none text-gray-400'}`} />
      </button>

      {/* Mobile CTA */}
      <div className="md:hidden fixed bottom-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 z-50 flex space-x-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
         <a href={`tel:${BRANCHES[0].phone}`} className="flex-1 bg-brand text-white py-3 rounded-full font-bold text-center flex items-center justify-center shadow-lg shadow-brand/20">
            <Phone size={18} className="mr-2" />
            Gọi Ngay
         </a>
         <a href={FB_LINK} target="_blank" rel="noreferrer" className="flex-1 bg-brand-pink text-brand py-3 rounded-full font-bold text-center flex items-center justify-center border border-brand/20">
            <Facebook size={18} className="mr-2" />
            Inbox
         </a>
      </div>
    </div>
  );
};

export default App;