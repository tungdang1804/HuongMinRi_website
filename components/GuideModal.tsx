
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  images: string[];
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden flex flex-col transform transition-all animate-scale-up">
        
        {/* Header */}
        <div className="bg-brand text-white p-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen size={20} />
            <span className="font-bold">Hướng Dẫn Đặt Lịch</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Slide Content */}
        <div className="relative aspect-[9/16] md:aspect-auto md:h-[600px] bg-gray-100 overflow-hidden">
          <img 
            src={images[currentIndex]} 
            alt={`Guide Step ${currentIndex + 1}`} 
            className="w-full h-full object-contain select-none"
          />

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="text-brand" size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="text-brand" size={24} />
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-brand w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-4 text-center bg-gray-50 border-t border-gray-100">
           <p className="text-gray-600 text-sm">Bước {currentIndex + 1} / {images.length}</p>
        </div>
      </div>
    </div>
  );
};
