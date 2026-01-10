import React from 'react';

export const SparkleIcon = React.memo(({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
));

export const StarIcon = React.memo(({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
     <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
));

interface FrenchCurveProps {
  fillClass: string;
  direction?: 'up' | 'down';
  className?: string;
}

// Mimics the "smile line" of a French Manicure
export const FrenchCurveDivider: React.FC<FrenchCurveProps> = React.memo(({ fillClass, direction = 'down', className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg 
        className={`w-full h-12 md:h-24 block ${fillClass}`} 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        {direction === 'down' ? (
           // Curves down (convex) - like the white tip of a french nail
           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
        ) : (
           // Curves up (concave)
           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
        )}
        
        {/* Main smooth "French Tip" Curve */}
        {direction === 'down' ? (
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        ) : (
           // Inverted curve logic for bottom
           <path d="M985.66,92.83c-70.05,18.48-146.53,26.09-214.34,3C692.33,75.05,609.44,34,527.77,14.19c-82.26-17.34-168-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.34,118.89,1053.86,111.28,985.66,92.83Z" />
        )}
      </svg>
    </div>
  );
});

SparkleIcon.displayName = 'SparkleIcon';
StarIcon.displayName = 'StarIcon';
FrenchCurveDivider.displayName = 'FrenchCurveDivider';