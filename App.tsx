
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Facebook, Phone, Star, Heart, Sparkles, Flower } from 'lucide-react';
import { siteConfig } from './site-settings';
import { BranchCard } from './components/BranchCard';
import { EventDecoration } from './components/EventDecoration';
import { PromotionPopup } from './components/PromotionPopup';
import { ReviewModal } from './components/ReviewModal';
import { TimelineModal } from './components/TimelineModal';
import { GuideModal } from './components/GuideModal';
import { OptimizedImage } from './components/OptimizedImage';
import { FrenchCurveDivider } from './components/Decoration';

const iconMap = {
  Sparkles: <Sparkles className="w-8 h-8" />,
  Flower: <Flower className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Gift: <Sparkles className="w-8 h-8" />,
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [isDecorEnabled, setIsDecorEnabled] = useState(siteConfig.features.enableHolidayMode);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const { basicInfo, navigation, contacts, event, assets, labels, features } = siteConfig;

  const isTetMode = isDecorEnabled && event.theme === 'tet';

  useEffect(() => {
    const primaryColor = basicInfo.themeColor || '#ff8fab';
    document.documentElement.style.setProperty('--color-primary', primaryColor);
    document.documentElement.style.setProperty('--color-primary-light', `${primaryColor}cc`);
    document.documentElement.style.setProperty('--color-primary-dark', `${primaryColor}ee`);
  }, [basicInfo.themeColor]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (features.showPromotionPopup) {
      const timer = setTimeout(() => setShowPromo(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [features.showPromotionPopup]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const toggleDecoration = useCallback(() => setIsDecorEnabled(prev => !prev), []);

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white font-body bg-brand-pink/30">
      
      <EventDecoration config={{
        theme: event.theme,
        showStickers: isDecorEnabled && event.showStickers,
        showFallingEffect: isDecorEnabled && event.showFallingEffect
      }} />
      
      <PromotionPopup isOpen={showPromo} promotions={siteConfig.promotions} onClose={() => setShowPromo(false)} />
      <ReviewModal isOpen={isReviewModalOpen} branches={siteConfig.branches} onClose={() => setIsReviewModalOpen(false)} />
      <TimelineModal isOpen={isTimelineOpen} events={siteConfig.timeline} onClose={() => setIsTimelineOpen(false)} />
      <GuideModal isOpen={isGuideOpen} images={siteConfig.guideImages} onClose={() => setIsGuideOpen(false)} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-1' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer active:scale-95 transition-transform" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-20 md:h-32 w-auto md:ml-5 flex items-center">
              <OptimizedImage 
                src={isDecorEnabled && event.theme === 'tet' ? assets.tetLogo : assets.footerLogo} 
                alt={basicInfo.name} 
                width={300}
                className="h-full w-full object-contain" 
                loading="eager"
              />
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="flex space-x-6 items-center mb-1">
              {navigation.map((item) => (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-700 bg-white/40 px-3 py-1 rounded-full'}`}
                >
                  {item.label}
                </button>
              ))}
              <button onClick={() => scrollToSection('contact')} className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide shadow-md hover:bg-primary-dark transition-all hover:scale-105">
                {labels.ctaPrimary}
              </button>
            </div>
            
            {isTetMode && (
              <div className={`bg-red-600 px-4 py-1 shadow-md border-l-4 border-yellow-400 rounded-bl-xl ${isTetMode ? 'bg-coin-pattern' : ''}`}>
                <div className="text-white font-black text-[10px] lg:text-xs uppercase tracking-widest whitespace-nowrap">
                  {event.bannerText}
                </div>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl animate-fade-in p-6 space-y-4 border-b rounded-b-3xl">
            {navigation.map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.targetId)}
                className="block w-full text-left py-3 text-gray-800 font-bold border-b border-gray-100"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollToSection('contact')} className="block w-full bg-primary text-white p-4 rounded-xl font-bold uppercase text-center shadow-lg">
              {labels.ctaPrimary}
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-0 md:pt-48 md:pb-0 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="font-signature text-7xl md:text-9xl text-primary leading-tight drop-shadow-sm">
              {basicInfo.sloganPrefix} <br/> 
              <span className="text-gray-800 text-4xl md:text-6xl font-body font-light tracking-tight">{basicInfo.sloganSuffix}</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-medium italic">
              "{basicInfo.description}"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={() => setIsTimelineOpen(true)} 
                className={`bg-red-600 text-white border-2 border-yellow-400 px-8 py-4 rounded-full font-black shadow-xl uppercase tracking-widest hover:scale-105 transition-transform ${isTetMode ? 'bg-coin-pattern' : ''}`}
              >
                {labels.ctaSecondary}
              </button>
              <button onClick={() => setIsGuideOpen(true)} className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-black shadow-lg uppercase tracking-widest hover:bg-brand-pink transition-transform">
                {labels.ctaTertiary}
              </button>
            </div>
          </div>

          <div className="relative">
             <div className="relative z-10 w-full aspect-square md:aspect-[4/5] max-w-md mx-auto">
                <OptimizedImage 
                  src={assets.heroImage} 
                  alt="Hero" 
                  width={800} 
                  className="rounded-[40%_60%_70%_30%/40%_50%_60%_50%] shadow-2xl w-full h-full object-cover border-8 border-white animate-sway" 
                  loading="eager" 
                />
                <button onClick={() => setIsReviewModalOpen(true)} className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white py-4 px-6 rounded-full shadow-2xl flex items-center space-x-3 border-2 border-brand-pink hover:scale-105 transition-all">
                  <Star className="text-yellow-400 fill-current" size={24} />
                  <div className="text-left">
                    <p className="font-signature text-2xl text-primary leading-none">{labels.reviewTitle}</p>
                    <span className="font-bold text-gray-500 text-[10px] uppercase tracking-tighter">{labels.reviewSubtitle}</span>
                  </div>
                </button>
             </div>
          </div>
        </div>
        
        {/* French Tip Curve Divider */}
        <FrenchCurveDivider fillClass="fill-white" className="mt-20 md:mt-32" />
      </header>

      {/* Services */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-signature text-7xl text-primary mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs">Chăm sóc tận tâm - Vẻ đẹp rạng ngời</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {siteConfig.services.map((service) => (
              <div key={service.id} className="bg-brand-pink/10 p-12 rounded-[3rem] shadow-sm border border-brand-pink/50 hover:shadow-xl hover:-translate-y-2 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                <div className="w-20 h-20 bg-white text-primary rounded-full shadow-inner flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  {iconMap[service.iconName as keyof typeof iconMap]}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curve Divider */}
      <FrenchCurveDivider fillClass="fill-brand-pink/20" direction="up" className="bg-white" />

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-brand-pink/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-signature text-7xl text-primary mb-4">Thư Viện Ảnh</h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Phong cách hiện đại & Trending</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 auto-rows-[250px] md:auto-rows-[350px]">
            {siteConfig.gallery.map((img) => (
              <div key={img.id} className={`relative group rounded-[3rem] overflow-hidden shadow-xl border-4 border-white ${img.span ? 'col-span-2 row-span-2' : ''}`}>
                <OptimizedImage src={img.url} alt={img.alt} width={img.span ? 1000 : 500} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                  <p className="text-white font-bold text-center text-lg">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curve Divider */}
      <FrenchCurveDivider fillClass="fill-white" className="bg-brand-pink/20" />

      {/* Contact & Branches */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-signature text-7xl text-primary mb-4">Liên Hệ & Đặt Lịch</h2>
            <div className="flex justify-center items-center space-x-4">
               <div className="h-px w-12 bg-primary"></div>
               <Heart className="text-primary animate-pulse" fill="currentColor" size={16} />
               <div className="h-px w-12 bg-primary"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.branches.map((branch) => (
              <BranchCard key={branch.id} data={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-pink/30 pt-24 pb-12 border-t border-brand-pink">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <div className="h-24 w-auto max-w-[200px] mx-auto md:mx-0">
              <OptimizedImage src={assets.footerLogo} alt="Logo" width={250} className="h-full object-contain" />
            </div>
            <p className="text-gray-500 leading-relaxed font-medium italic">{basicInfo.description}</p>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-primary text-xs uppercase tracking-[0.3em]">Danh Mục</h4>
            <ul className="space-y-4">
              {navigation.map(n => (
                <li key={n.label}>
                  <button onClick={() => scrollToSection(n.targetId)} className="text-gray-500 hover:text-primary font-bold transition-all hover:translate-x-1">
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-black text-primary text-xs uppercase tracking-[0.3em]">Kết Nối</h4>
            <p className="text-gray-700 font-bold text-xl">{contacts.hotline}</p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href={contacts.facebook} target="_blank" className="bg-white p-4 rounded-full shadow-md text-blue-600 hover:scale-110 transition-transform border border-brand-pink"><Facebook /></a>
              <a href={contacts.tiktok} target="_blank" className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-transform border border-brand-pink">
                <OptimizedImage src={assets.tiktokIcon} width={24} className="w-6 h-6" alt="tiktok" />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-brand-pink/50 text-center">
          <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} {basicInfo.copyright}
          </p>
        </div>
      </footer>

      {/* Decoration Toggle */}
      {features.enableDecorationToggle && (
        <button onClick={toggleDecoration} className="fixed bottom-24 md:bottom-12 left-8 bg-white text-primary p-5 rounded-full shadow-2xl border-2 border-primary/20 z-50 hover:scale-110 transition-all group">
          <Sparkles className={isDecorEnabled ? 'fill-primary' : 'text-gray-300'} />
        </button>
      )}

      {/* Floating CTA (Mobile) */}
      <div className="md:hidden fixed bottom-0 w-full bg-white/95 backdrop-blur-md border-t p-4 z-[100] flex gap-4 shadow-[0_-10px_40px_rgba(255,143,171,0.2)]">
         <a href={`tel:${contacts.hotline}`} className="flex-1 bg-primary text-white py-4 rounded-full font-black text-center flex items-center justify-center uppercase tracking-widest text-xs shadow-lg">
            <Phone size={16} className="mr-2" /> Gọi
         </a>
         <a href={contacts.facebook} target="_blank" className="flex-1 bg-brand-pink text-primary py-4 rounded-full font-black text-center flex items-center justify-center uppercase tracking-widest text-xs border border-primary/20">
            <Facebook size={16} className="mr-2" /> Inbox
         </a>
      </div>
    </div>
  );
};

export default App;
