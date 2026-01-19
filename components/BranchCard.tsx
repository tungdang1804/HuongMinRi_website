
import React from 'react';
// Import Star icon to fix the missing component error
import { MapPin, Phone, Star } from 'lucide-react';
import { Branch } from '../types';

interface BranchCardProps {
  data: Branch;
}

export const BranchCard: React.FC<BranchCardProps> = React.memo(({ data }) => {
  return (
    <div className="bg-[#fdf2f5]/30 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-pink relative overflow-hidden group">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      
      <h3 className="text-2xl font-signature text-primary font-bold mb-6">{data.name}</h3>
      
      <div className="space-y-4 relative z-10">
        <div className="flex items-start space-x-4">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">{data.address}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <Phone className="w-5 h-5 text-primary shrink-0" />
          </div>
          <a href={`tel:${data.phone.replace(/-/g, '')}`} className="text-gray-800 font-bold hover:text-primary transition-colors text-base">
            {data.phone}
          </a>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-brand-pink/50 flex justify-between items-center">
        <div className="flex space-x-1">
          {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-yellow-400 fill-current" />)}
        </div>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address)}`} 
          target="_blank" 
          rel="noreferrer"
          className="text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:underline"
        >
          Xem vị trí
        </a>
      </div>
    </div>
  );
});

BranchCard.displayName = 'BranchCard';