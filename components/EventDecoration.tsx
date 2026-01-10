
import React, { useMemo } from 'react';
import { EventConfig } from '../types';
import { THEME_DATA } from '../constants';

interface EventDecorationProps {
  config: EventConfig;
}

const EventDecoration: React.FC<EventDecorationProps> = React.memo(({ config }) => {
  if (config.theme === 'none') return null;

  const themeData = THEME_DATA[config.theme];

  const renderStickers = () => {
    switch (config.theme) {
      case 'tet':
        return (
          <>
            {themeData?.stickerTopLeft && (
              <div className={themeData.stickerTopLeft.className}>
                <img 
                  src={themeData.stickerTopLeft.src} 
                  alt="Tet Ribbon" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            )}
          </>
        );
      case 'christmas':
        return (
          <>
            {themeData?.stickerTopLeft && (
              <div className={themeData.stickerTopLeft.className}>
                <img 
                  src={themeData.stickerTopLeft.src} 
                  alt="Christmas Ribbon" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  const particles = useMemo(() => {
    if (!themeData?.particles) return [];

    return themeData.particles.map(layer => ({
      ...layer,
      items: Array.from({ length: layer.count }).map((_, i) => ({
        id: `p-${layer.animationName}-${i}`,
        left: Math.random() * 90 + 5, // Tránh sát mép
        top: Math.random() * 80 + 5, 
        delay: Math.random() * 20, // Tăng độ trễ để pop-up xen kẽ ngẫu nhiên
        duration: 4 + Math.random() * 6, 
        size: layer.minSize + Math.random() * (layer.maxSize - layer.minSize),
      }))
    }));
  }, [themeData]); 

  const renderFallingEffect = () => {
    return (
      <>
        <style>{`
          @keyframes snowfall {
            0% { transform: translate3d(0, -30px, 0) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate3d(20px, 105vh, 0) rotate(360deg); opacity: 0; }
          }
          @keyframes fireworkPop {
            0% { transform: scale(0.3); opacity: 0; }
            20% { opacity: 1; }
            40% { transform: scale(1.1); }
            60% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
          @keyframes sway {
             0%, 100% { transform: rotate(0deg) scale(1); }
             50% { transform: rotate(2deg) scale(1.02); }
          }
          .animate-sway {
             animation: sway 3s ease-in-out infinite;
             transform-origin: top left;
          }
        `}</style>

        {particles.map(layer => (
          layer.items.map(p => {
             const animation = layer.animationName === 'fireworkPop' 
                ? `fireworkPop ${p.duration}s ease-out ${p.delay}s infinite`
                : `${layer.animationName} ${p.duration}s linear ${p.delay}s infinite`;

             return (
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
             )
          })
        ))}
      </>
    );
  };

  const containerZIndex = config.theme === 'tet' ? 'z-[5]' : 'z-50';

  return (
    <>
      {config.showStickers && renderStickers()}
      {config.showFallingEffect && (
        <div className={`fixed inset-0 pointer-events-none ${containerZIndex}`}>
          {renderFallingEffect()}
        </div>
      )}
    </>
  );
});

EventDecoration.displayName = 'EventDecoration';

export { EventDecoration };
