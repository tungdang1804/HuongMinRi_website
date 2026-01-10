
import { Branch, GalleryImage, ServiceItem, EventConfig, Promotion, ThemeData, TimelineEvent } from './types';
import { Sparkles, Flower, Heart, Gift } from 'lucide-react';
import React from 'react';

export const BRAND_COLOR = '#387878';
export const FB_LINK = "https://www.facebook.com/huongminri";
export const TIKTOK_LINK = "https://www.tiktok.com/@huongminrinailgovap?is_from_webapp=1&sender_device=pc";

// Tet Decoration Assets
export const TET_LOGO_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1768028349/Logo_tet_advcmd.png";
export const TET_RIBBON_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1768028349/ruybang_Tet_fgc4tj.png";
export const TET_PARTICLE_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034247/ph%C3%A1o_hoa_gtapvh.gif";

// Booking Guide Assets
export const GUIDE_IMAGES = [
  "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034362/z7405831211227_01d212eacd469210457e780acfa4fe8f_scclgx.jpg",
  "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034362/z7405831211228_a1a49a5ebe08989bb9a08f6e28b64eb0_h4i63q.jpg",
  "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034361/z7405831211226_dd5732fda25112a6627b496c5bc56c88_vqjrlj.jpg"
];

// Archived Xmas Assets
export const XMAS_LOGO_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1764688076/Fanpage_Logo_HMR_Xmas_v5bgrs.png";
export const XMAS_RIBBON_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1764686633/Xmas_ribbon_tma0s9.png";
export const XMAS_TREE_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1764681759/Xmas_tree_ptseng.png";
export const XMAS_SNOW_FLARE_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1764681949/Xmas_snow_flare_ajwnm9.png";

// Base Assets
export const HERO_IMAGE_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644406/Nail_dep_HuongMinRi_01_yhmbjy.jpg";
export const FOOTER_LOGO_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644344/Fanpage_Logo_HMR_chuden_yrnwkr.png";
export const DEFAULT_TIKTOK_ICON_URL = "https://res.cloudinary.com/dzwvawf87/image/upload/v1764689703/tiktok_icon_xgjxes.png";

// --- SWITCH EVENT TYPE HERE ---
export const EVENT_CONFIG: EventConfig = {
  theme: 'tet', // Change to 'christmas' or 'none' to switch modes
  showStickers: true,
  showFallingEffect: true,
};

// Set Active Logo based on Theme
export const LOGO_URL = EVENT_CONFIG.theme === 'tet' ? TET_LOGO_URL : (EVENT_CONFIG.theme === 'christmas' ? XMAS_LOGO_URL : FOOTER_LOGO_URL);

// Theme Background Classes
export const THEME_BG_CLASSES = {
  tet: {
    hero: "bg-gradient-to-b from-red-50 via-white to-white",
    section: "bg-red-50/50",
    accent: "bg-red-100/50",
    text: "text-red-800"
  },
  christmas: {
    hero: "bg-gradient-to-b from-brand-pink via-white to-white",
    section: "bg-brand-pink",
    accent: "bg-brand-beige",
    text: "text-brand"
  },
  none: {
    hero: "bg-gradient-to-b from-brand-beige via-white to-white",
    section: "bg-brand-beige",
    accent: "bg-white",
    text: "text-brand"
  }
};

export const BRANCHES: Branch[] = [
  {
    id: 1,
    address: "273 Đường số 8, Phường Thông Tây Hội, TP HCM.",
    phone: "0937-787-807",
    googleMapReviewLink: "https://maps.app.goo.gl/RVMsAxhV9p7kfGKz6"
  },
  {
    id: 2,
    address: "444 Thống Nhất, Phường An Hội Đông, TP HCM.",
    phone: "0903-755-076",
    googleMapReviewLink: "https://maps.app.goo.gl/JWd9JU8HfQdN5gY7"
  },
  {
    id: 3,
    address: "1183 Phan Văn Trị, Phường Gò Vấp, TP HCM.",
    phone: "0348-638-488",
    googleMapReviewLink: "https://maps.app.goo.gl/r1pSTzLXSY6cDnAz6"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Nail Art Thiết Kế",
    description: "Cập nhật những mẫu nail trending, hiện đại, đính đá, vẽ gel tỉ mỉ theo yêu cầu.",
    icon: <Sparkles className="w-8 h-8 text-brand" />
  },
  {
    id: 2,
    title: "Gội Đầu Dưỡng Sinh",
    description: "Thư giãn tuyệt đối, giảm căng thẳng mệt mỏi.",
    icon: <Flower className="w-8 h-8 text-brand" />
  },
  {
    id: 3,
    title: "Massage Cổ - Vai - Gáy",
    description: "Đánh tan nhức mỏi, chăm sóc cơ thể.",
    icon: <Heart className="w-8 h-8 text-brand" />
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644418/Nail_dep_HuongMinRi_03_d3jzlv.jpg", alt: "Gel Thạch Trong Xinh Xắn", span: true },
  { id: 2, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644409/Nail_dep_HuongMinRi_02_aubhol.jpg", alt: "Úp Móng Cá Tính, Bí Ẩn" },
  { id: 3, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644393/Nail_dep_HuongMinRi_03_jlipjg.jpg", alt: "Design Paint Hiện Đại, Nổi Bật" },
  { id: 4, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644385/Nail_%C4%91%E1%BA%B9p_HMR_1_oaezh4.jpg", alt: "French Đầu Móng Sắc Sảo, Đơn Giản" },
  { id: 5, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644377/NailH%C6%B0%C6%A1ngMinRi.jpg_cqszjb.jpg", alt: "Trang Trí Dễ Thương, Hợp Thời Trang" },
  { id: 6, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644328/Nail_HuongMinRi_01_jp41oy.jpg", alt: "Mẫu Nail Đẹp Tại Salon" }
];

export const THEME_DATA: Record<string, ThemeData> = {
  tet: {
    stickerTopLeft: {
      src: TET_RIBBON_URL,
      className: "fixed top-0 left-0 z-[55] pointer-events-none hidden xl:block xl:w-80 xl:h-80 animate-sway"
    },
    particles: [
      {
        count: 7, 
        imgUrl: TET_PARTICLE_URL,
        minSize: 120,
        maxSize: 200,
        animationName: 'fireworkPop',
        className: 'fixed z-[5] pointer-events-none opacity-50'
      }
    ]
  },
  christmas: {
    stickerTopLeft: {
      src: XMAS_RIBBON_URL,
      className: "fixed top-0 left-0 z-[55] pointer-events-none hidden md:block md:w-20 md:h-20 lg:w-60 lg:h-60 animate-sway"
    },
    particles: [
      {
        count: 50, 
        minSize: 8,
        maxSize: 18,
        animationName: 'snowfall',
        className: 'fixed top-[-20px] rounded-full bg-white opacity-80 z-50 pointer-events-none shadow-sm blur-[0.5px]'
      },
      {
        count: 33, 
        imgUrl: XMAS_SNOW_FLARE_URL,
        minSize: 15,
        maxSize: 25,
        animationName: 'snowfall',
        className: 'fixed top-[-30px] z-40 pointer-events-none opacity-60'
      }
    ]
  }
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 1,
    title: "Khai Xuân Như Ý - Lì Xì Trao Tay",
    startDate: "01/01/2026",
    endDate: "15/02/2026",
    description: "Chào đón năm mới với ưu đãi đặc biệt. Tặng lì xì may mắn trị giá đến 100K cho khách hàng làm dịch vụ từ 500K trở lên.",
    icon: <Gift className="text-white" />
  },
  {
    id: 2,
    title: "Combo Gội đầu Tết - Phục hồi tóc hư tổn",
    startDate: "01/01/2026",
    endDate: "15/02/2026",
    description: "Gội đầu thảo dược + Massage thư giãn chuyên sâu giúp bạn rạng rỡ đón Tết. Chỉ 149K cho liệu trình 75 phút.",
    icon: <Heart className="text-white" />
  }
];

export const SHOW_PROMOTION_POPUP = false;
export const PROMOTION_CATALOGUE: Promotion[] = [];
