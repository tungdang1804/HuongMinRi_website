
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Promotion } from '../types';

interface PromotionPopupProps {
  isOpen: boolean;
  promotions: Promotion[];
  onClose: () => void;
}

export const PromotionPopup: React.FC<PromotionPopupProps> = ({ isOpen, promotions, onClose }) => {
  const [activePromo, setActivePromo] = useState<Promotion | null>(null);

  useEffect(() => {
    if (isOpen && promotions.length > 0) {
      // Find the first active promotion
      const active = promotions.find(p => p.isActive);
      setActivePromo(active || null);
    }
  }, [isOpen, promotions]);

  if (!isOpen || !activePromo) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden transform transition-all animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors z-10"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="flex flex-col">
          {activePromo.imageUrl ? (
            <img 
              src={activePromo.imageUrl} 
              alt={activePromo.title} 
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-brand-pink to-brand-light flex items-center justify-center">
              <span className="text-brand font-signature text-4xl">Ưu Đãi Đặc Biệt</span>
            </div>
          )}

          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-brand mb-2">{activePromo.title}</h3>
            <p className="text-gray-600 mb-6">{activePromo.description}</p>
            
            {activePromo.ctaLink && (
              <a 
                href={activePromo.ctaLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block w-full bg-brand text-white font-bold py-3 rounded-xl hover:bg-brand-dark transition-transform hover:scale-105 shadow-lg shadow-brand/30"
              >
                {activePromo.ctaText || "Nhận Ưu Đãi Ngay"}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
