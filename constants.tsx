
import { ThemeData } from './types';
import { siteConfig } from './site-settings';

const { assets } = siteConfig;

export const THEME_DATA: Record<string, ThemeData> = {
  tet: {
    stickerTopLeft: {
      src: assets.tetRibbon,
      // hidden sm:block: Ẩn trên mobile, hiện từ tablet trở lên
      // Giảm độ rộng tối đa để không che chữ khi zoom
      className: "fixed top-0 left-0 z-[55] pointer-events-none hidden sm:block w-[150px] md:w-[220px] lg:w-[280px] xl:w-[300px] h-auto animate-sway"
    },
    particles: [
      {
        count: 6, 
        imgUrl: assets.tetParticle,
        minSize: 60,
        maxSize: 120,
        animationName: 'fireworkPop',
        className: 'fixed z-[5] pointer-events-none opacity-40'
      }
    ]
  },
  christmas: {
    stickerTopLeft: {
      src: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764686633/Xmas_ribbon_tma0s9.png",
      className: "fixed top-0 left-0 z-[55] pointer-events-none hidden sm:block w-[120px] md:w-[200px] h-auto animate-sway"
    },
    particles: [
      {
        count: 30, 
        minSize: 4,
        maxSize: 10,
        animationName: 'snowfall',
        className: 'fixed top-[-20px] rounded-full bg-white opacity-80 z-50 pointer-events-none'
      }
    ]
  }
};
