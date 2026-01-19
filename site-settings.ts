
import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  basicInfo: {
    name: "Hương MinRi",
    sloganPrefix: "Nail Art &",
    sloganSuffix: "Salon Spa",
    description: "Nơi vẻ đẹp được chăm chút tỉ mỉ từng chi tiết. Trải nghiệm phong cách Nail sang trọng và dịch vụ Gội Đầu Dưỡng Sinh, Massage Cổ-Vai-Gáy thư giãn, đánh tan mọi mệt mỏi, đau nhức.",
    copyright: "Hương MinRi Nail & Spa",
    themeColor: "#ff8fab" // Chuyển về màu Hồng Thương Hiệu
  },
  navigation: [
    { label: "Dịch Vụ", targetId: "services" },
    { label: "Thư Viện", targetId: "gallery" },
    { label: "Liên Hệ", targetId: "contact" },
  ],
  contacts: {
    hotline: "0937787807",
    businessHours: "9:00 - 21:00",
    facebook: "https://www.facebook.com/huongminri",
    tiktok: "https://www.tiktok.com/@huongminrinailgovap"
  },
  features: {
    enableHolidayMode: true,
    showPromotionPopup: false,
    enableDecorationToggle: true
  },
  event: {
    theme: 'tet',
    bannerText: "Hương MinRi Chúc Mừng Năm Mới 2026",
    showStickers: true,
    showFallingEffect: true,
  },
  assets: {
    heroImage: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644406/Nail_dep_HuongMinRi_01_yhmbjy.jpg",
    footerLogo: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644344/Fanpage_Logo_HMR_chuden_yrnwkr.png",
    tiktokIcon: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764689703/tiktok_icon_xgjxes.png",
    tetLogo: "https://res.cloudinary.com/dzwvawf87/image/upload/v1768028349/Logo_tet_advcmd.png",
    tetRibbon: "https://res.cloudinary.com/dzwvawf87/image/upload/v1768028349/ruybang_Tet_fgc4tj.png",
    tetParticle: "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034247/ph%C3%A1o_hoa_gtapvh.gif",
    settings: {
      cloudinaryAutoFormat: true,
      cloudinaryQuality: 'auto',
      defaultWidth: 1200
    }
  },
  labels: {
    ctaPrimary: "Liên Hệ Ngay",
    ctaSecondary: "Khuyến Mãi",
    ctaTertiary: "Hướng Dẫn đặt lịch Tết",
    reviewTitle: "Đánh Giá",
    reviewSubtitle: "Trải Nghiệm Của Bạn",
  },
  branches: [
    {
      id: 1,
      name: "Chi Nhánh 1",
      address: "273 Đường số 8, Phường Thông Tây Hội, TP HCM.",
      phone: "0937-787-807",
      googleMapReviewLink: "https://maps.app.goo.gl/RVMsAxhV9p7kfGKz6"
    },
    {
      id: 2,
      name: "Chi Nhánh 2",
      address: "444 Thống Nhất, Phường An Hội Đông, TP HCM.",
      phone: "0903-755-076",
      googleMapReviewLink: "https://maps.app.goo.gl/JWd9JU8HfQdN5gY7"
    },
    {
      id: 3,
      name: "Chi Nhánh 3",
      address: "1183 Phan Văn Trị, Phường Gò Vấp, TP HCM.",
      phone: "0348-638-488",
      googleMapReviewLink: "https://maps.app.goo.gl/r1pSTzLXSY6cDnAz6"
    }
  ],
  services: [
    {
      id: 1,
      title: "Nail Art Thiết Kế",
      description: "Cập nhật những mẫu nail trending, hiện đại, đính đá, vẽ gel tỉ mỉ theo yêu cầu.",
      iconName: 'Sparkles'
    },
    {
      id: 2,
      title: "Gội Đầu Dưỡng Sinh",
      description: "Thư giãn tuyệt đối, giảm căng thẳng mệt mỏi.",
      iconName: 'Flower'
    },
    {
      id: 3,
      title: "Massage Cổ - Vai - Gáy",
      description: "Đánh tan nhức mỏi, chăm sóc cơ thể.",
      iconName: 'Heart'
    }
  ],
  gallery: [
    { id: 1, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644418/Nail_dep_HuongMinRi_03_d3jzlv.jpg", alt: "Gel Thạch Trong Xinh Xắn", span: true },
    { id: 2, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644409/Nail_dep_HuongMinRi_02_aubhol.jpg", alt: "Úp Móng Cá Tính, Bí Ẩn" },
    { id: 3, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644393/Nail_dep_HuongMinRi_03_jlipjg.jpg", alt: "Design Paint Hiện Đại, Nổi Bật" },
    { id: 4, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644385/Nail_%C4%91%E1%BA%B9p_HMR_1_oaezh4.jpg", alt: "French Đầu Móng Sắc Sảo, Đơn Giản" },
    { id: 5, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644377/NailH%C6%B0%C6%A1ngMinRi.jpg_cqszjb.jpg", alt: "Trang Trí Dễ Thương, Hợp Thời Trang" },
    { id: 6, url: "https://res.cloudinary.com/dzwvawf87/image/upload/v1764644328/Nail_HuongMinRi_01_jp41oy.jpg", alt: "Mẫu Nail Đẹp Tại Salon" }
  ],
  timeline: [
    {
      id: 1,
      title: "Khai Xuân Như Ý - Lì Xì Trao Tay",
      startDate: "01/01/2026",
      endDate: "15/02/2026",
      description: "Chào đón năm mới với ưu đãi đặc biệt. Tặng lì xì may mắn trị giá đến 100K cho khách hàng làm dịch vụ từ 500K trở lên.",
      type: 'hot'
    },
    {
      id: 2,
      title: "Combo Gội đầu Tết - Phục hồi tóc hư tổn",
      startDate: "01/01/2026",
      endDate: "15/02/2026",
      description: "Gội đầu thảo dược + Massage thư giãn chuyên sâu giúp bạn rạng rỡ đón Tết. Chỉ 149K cho liệu trình 75 phút.",
      type: 'normal'
    }
  ],
  promotions: [],
  guideImages: [
    "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034362/z7405831211227_01d212eacd469210457e780acfa4fe8f_scclgx.jpg",
    "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034362/z7405831211228_a1a49a5ebe08989bb9a08f6e28b64eb0_h4i63q.jpg",
    "https://res.cloudinary.com/dzwvawf87/image/upload/v1768034361/z7405831211226_dd5732fda25112a6627b496c5bc56c88_vqjrlj.jpg"
  ]
};
