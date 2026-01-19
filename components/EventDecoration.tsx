import React, { useMemo } from 'react';
import { EventConfig } from '../types';
import { THEME_DATA } from '../constants';
import { OptimizedImage } from './OptimizedImage';

interface EventDecorationProps {
  config: EventConfig;
}

const EventDecoration: React.FC<EventDecorationProps> = React.memo(({ config }) => {
  // Respect toggle state and holiday mode
  if (config.theme === 'none' || (!config.showStickers && !config.showFallingEffect)) return null;

  const themeData = THEME_DATA[config.theme];

  const renderStickers = () => {
    if (!config.showStickers || !themeData?.stickerTopLeft) return null;
    
    return (
      <div className={themeData.stickerTopLeft.className}>
        <OptimizedImage 
          src={themeData.stickerTopLeft.src} 
          alt={`${config.theme} Decoration`} 
          width={400}
          className="w-full h-auto object-contain"
          loading="eager"
        />
      </div>
    );
  };

  const particles = useMemo(() => {
    if (!config.showFallingEffect || !themeData?.particles) return [];

    return themeData.particles.map(layer => ({
      ...layer,
      items: Array.from({ length: layer.count }).map((_, i) => ({
        id: `p-${layer.animationName}-${i}`,
        left: Math.random() * 95,
        top: Math.random() * 85, 
        delay: Math.random() * 10,
        duration: 5 + Math.random() * 5, 
        size: layer.minSize + Math.random() * (layer.maxSize - layer.minSize),
      }))
    }));
  }, [themeData, config.showFallingEffect]); 

  const renderFallingEffect = () => {
    if (!config.showFallingEffect) return null;
    
    return (
      <>
        <style>{`
          @keyframes snowfall {
            0% { transform: translate3d(0, -30px, 0) rotate(0deg); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translate3d(20px, 105vh, 0) rotate(360deg); opacity: 0; }
          }
          @keyframes fireworkPop {
            0% { transform: scale(0.3); opacity: 0; }
            20% { opacity: 0.6; }
            40% { transform: scale(1); }
            60% { transform: scale(0.9); opacity: 0.6; }
            100% { transform: scale(1.2); opacity: 0; }
          }
          @keyframes sway {
             0%, 100% { transform: rotate(0deg) scale(1); }
             50% { transform: rotate(1.5deg) scale(1.01); }
          }
          .animate-sway {
             animation: sway 4s ease-in-out infinite;
             transform-origin: top left;
          }
        `}</style>

        {particles.map(layer => (
          layer.items.map(p => {
             const animation = layer.animationName === 'fireworkPop' 
                ? `fireworkPop ${p.duration}s ease-out ${p.delay}s infinite`
                : `${layer.animationName} ${p.duration}s linear ${p.delay}s infinite`;

             return layer.imgUrl ? (
               <img 
                key={p.id}
                src={layer.imgUrl}
                alt=""
                className={`${layer.className} will-change-transform`}
                style={{
                  left: `${p.left}vw`,
                  top: layer.animationName === 'fireworkPop' ? `${p.top}vh` : undefined,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animation: animation,
                }}
              />
             ) : (
               <div
                 key={p.id}
                 className={layer.className}
                 style={{
                   left: `${p.left}vw`,
                   width: `${p.size}px`,
                   height: `${p.size}px`,
                   animation: animation,
                 }}
               />
             );
          })
        ))}
      </>
    );
  };

  const containerZIndex = 'z-[50]';

  return (
    <div className={`fixed inset-0 pointer-events-none ${containerZIndex}`}>
      {renderStickers()}
      {renderFallingEffect()}
    </div>
  );
});

EventDecoration.displayName = 'EventDecoration';

export { EventDecoration };