import React from 'react';
import { siteConfig } from '../site-settings';
import { optimizeCloudinary } from '../utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
}

/**
 * OptimizedImage Component
 * Chịu trách nhiệm render hình ảnh đã qua tối ưu hóa dựa trên Asset Settings trong siteConfig.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = React.memo(({ 
  src, 
  width, 
  alt, 
  className, 
  loading = 'lazy',
  ...props 
}) => {
  // Thực hiện tối ưu hóa URL trước khi render
  const optimizedSrc = optimizeCloudinary(src, siteConfig.assets.settings, width);
  
  return (
    <img 
      src={optimizedSrc} 
      alt={alt || siteConfig.basicInfo.name} 
      className={className} 
      loading={loading}
      {...props}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';
