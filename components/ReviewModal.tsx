
import React, { useState } from 'react';
import { Star, X, MapPin, CheckCircle } from 'lucide-react';
import { Branch } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  branches: Branch[];
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, branches, onClose }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<number>(branches[0]?.id || 1);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    // 1. Copy text to clipboard
    if (comment.trim()) {
      navigator.clipboard.writeText(comment);
      setIsCopied(true);
      
      // Show "Copied" state briefly before redirecting
      setTimeout(() => {
        redirectToGoogleMaps();
      }, 1500);
    } else {
      redirectToGoogleMaps();
    }
  };

  const redirectToGoogleMaps = () => {
    const branch = branches.find(b => b.id === selectedBranchId);
    if (branch?.googleMapReviewLink) {
      window.open(branch.googleMapReviewLink, '_blank');
    }
    onClose();
    setIsCopied(false);
    setComment('');
    setRating(5); // Reset rating
  };

  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden transform transition-all animate-scale-up border-4 border-brand-pink"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-brand text-white p-6 text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
          >
            <X size={20} />
          </button>
          <h3 className="font-signature text-3xl mb-1">Đánh Giá Dịch Vụ</h3>
          <p className="text-brand-pink text-sm opacity-90">Ý kiến của bạn giúp Hương MinRi phục vụ tốt hơn ❤️</p>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">
          
          {/* Branch Selection */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center">
              <MapPin size={16} className="mr-2 text-brand" />
              Chọn chi nhánh bạn đã trải nghiệm:
            </label>
            <div className="relative">
              <select 
                value={selectedBranchId} 
                onChange={(e) => setSelectedBranchId(Number(e.target.value))}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand appearance-none"
              >
                {branches.map(branch => (
                  <option key={branch.id} value={branch.id}>
                    Chi nhánh {branch.id} - {branch.address.split(',')[0]}...
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
              </div>
            </div>
          </div>

          {/* Stars (Interactive) */}
          <div className="text-center">
            <label className="text-sm font-bold text-gray-700 block mb-2">Mức độ hài lòng:</label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star} 
                  onClick={() => setRating(star)}
                  className="focus:outline-none transform transition-transform hover:scale-110"
                >
                  <Star 
                    size={32} 
                    className={`${
                      star <= rating 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-300 fill-gray-100'
                    } drop-shadow-sm transition-colors`} 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment Area */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Chia sẻ cảm nhận của bạn:</label>
            <textarea 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Nhân viên nhiệt tình, mẫu nail đẹp..."
              className="w-full p-4 bg-brand-pink/20 border border-brand-pink/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand h-32 resize-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            disabled={isCopied}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transform transition-all active:scale-95 flex items-center justify-center ${
              isCopied 
                ? 'bg-green-500 text-white' 
                : 'bg-brand text-white hover:bg-brand-dark'
            }`}
          >
            {isCopied ? (
              <>
                <CheckCircle className="mr-2" /> Đã sao chép! Đang mở Google Maps...
              </>
            ) : (
              "Gửi Đánh Giá Lên Google"
            )}
          </button>
          
          <p className="text-xs text-center text-gray-400 italic">
            *Nội dung sẽ được sao chép tự động để bạn dán vào Google Maps.
          </p>
        </div>
      </div>
    </div>
  );
};
