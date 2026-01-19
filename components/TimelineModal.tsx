
import React from 'react';
import { X, Calendar, Clock, Gift } from 'lucide-react';
import { TimelineEvent } from '../types';

interface TimelineModalProps {
  isOpen: boolean;
  events: TimelineEvent[];
  onClose: () => void;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ isOpen, events, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-brand/20 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white/95 rounded-[2rem] shadow-2xl max-w-2xl w-full relative overflow-hidden flex flex-col max-h-[90vh] border border-white/50"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand to-brand-light p-6 relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-3 text-white">
            <div className="bg-white/20 p-3 rounded-full">
               <Gift size={28} />
            </div>
            <div>
              <h2 className="font-signature text-4xl">Sự Kiện & Ưu Đãi</h2>
              <p className="text-brand-pink text-sm opacity-90 font-medium">Đừng bỏ lỡ những deal hot nhất tại Hương MinRi</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="relative border-l-4 border-brand-pink/50 ml-4 md:ml-6 space-y-12 my-4">
            {events.map((event, index) => (
              <div key={event.id} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute -left-[14px] md:-left-[18px] top-0 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-brand rounded-full border-4 border-white shadow-md z-10">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3 border-b border-gray-50 pb-3">
                     <h3 className="text-xl font-bold text-brand group-hover:text-brand-dark transition-colors">
                       {event.title}
                     </h3>
                     <span className="inline-flex items-center text-xs font-bold text-white bg-red-500 px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                        HOT DEAL
                     </span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4 bg-gray-50 p-2 rounded-lg inline-block">
                    <Calendar size={16} className="mr-2 text-brand" />
                    <span className="font-medium">Thời gian:</span>
                    <span className="ml-2 text-gray-700">{event.startDate} - {event.endDate}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {events.length === 0 && (
             <div className="text-center text-gray-500 py-10">
               Hiện tại chưa có sự kiện nào. Quay lại sau nhé!
             </div>
          )}
        </div>

        {/* Footer decoration */}
        <div className="h-2 bg-brand-pink shrink-0"></div>
      </div>
    </div>
  );
};
