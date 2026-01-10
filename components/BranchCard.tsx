import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Branch } from '../types';

interface BranchCardProps {
  branch: Branch;
  index: number;
}

export const BranchCard: React.FC<BranchCardProps> = React.memo(({ branch, index }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-brand/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand/5 rounded-full group-hover:bg-brand/10 transition-colors"></div>
      
      <h3 className="text-xl font-signature text-brand font-bold mb-4">Chi Nhánh {index + 1}</h3>
      
      <div className="flex items-start space-x-3 mb-3">
        <MapPin className="w-5 h-5 text-brand shrink-0 mt-1" />
        <p className="text-gray-600 text-sm leading-relaxed">{branch.address}</p>
      </div>
      
      <div className="flex items-center space-x-3">
        <Phone className="w-5 h-5 text-brand shrink-0" />
        <a href={`tel:${branch.phone.replace(/-/g, '')}`} className="text-gray-800 font-medium hover:text-brand transition-colors">
          {branch.phone}
        </a>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} 
          target="_blank" 
          rel="noreferrer"
          className="text-xs font-semibold text-brand uppercase tracking-wider hover:underline"
        >
          Chỉ đường
        </a>
      </div>
    </div>
  );
});

BranchCard.displayName = 'BranchCard';