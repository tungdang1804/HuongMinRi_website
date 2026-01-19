import { AssetSettings } from './types';

/**
 * AssetOptimizer: Tự động thêm tham số tối ưu hóa Cloudinary
 * Giúp giảm dung lượng ảnh mà không giảm chất lượng hiển thị (q_auto, f_auto)
 */
export const optimizeCloudinary = (url: string, settings: AssetSettings, width?: number): string => {
  if (!url || !url.includes('cloudinary.com')) return url;

  const params: string[] = [];
  
  if (settings.cloudinaryAutoFormat) {
    params.push('f_auto');
  }
  
  if (settings.cloudinaryQuality) {
    params.push(`q_${settings.cloudinaryQuality}`);
  }

  if (width || settings.defaultWidth) {
    params.push(`w_${width || settings.defaultWidth}`);
    params.push('c_limit'); // Resize giữ tỉ lệ
  }

  if (params.length === 0) return url;

  const transformationString = params.join(',');
  
  // Cloudinary URL format: .../upload/[transformations]/v123/...
  if (url.includes('/upload/')) {
    // Tránh việc lặp lại transformation nếu đã có
    if (url.match(/\/upload\/[a-z0-9_,]+\//)) {
      return url;
    }
    return url.replace('/upload/', `/upload/${transformationString}/`);
  }

  return url;
};