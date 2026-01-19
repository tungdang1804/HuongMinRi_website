import React from 'react';

export interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  googleMapReviewLink: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Flower' | 'Heart' | 'Gift';
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  span?: boolean;
}

export interface TimelineEvent {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  type: 'hot' | 'normal';
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  isActive: boolean;
}

export interface EventConfig {
  theme: 'tet' | 'christmas' | 'none';
  showStickers: boolean;
  showFallingEffect: boolean;
}

export interface AssetSettings {
  cloudinaryAutoFormat: boolean;
  cloudinaryQuality: 'auto' | 'best' | 'good' | 'eco';
  defaultWidth?: number;
}

export interface ThemeParticle {
  count: number;
  imgUrl?: string;
  minSize: number;
  maxSize: number;
  animationName: string;
  className: string;
}

export interface ThemeSticker {
  src: string;
  className: string;
}

export interface ThemeData {
  stickerTopLeft?: ThemeSticker;
  particles?: ThemeParticle[];
}

export interface SiteConfig {
  basicInfo: {
    name: string;
    sloganPrefix: string;
    sloganSuffix: string;
    description: string;
    copyright: string;
    themeColor?: string; // Mã màu chủ đạo của thương hiệu
  };
  navigation: {
    label: string;
    targetId: string;
  }[];
  contacts: {
    hotline: string;
    businessHours: string;
    facebook: string;
    tiktok: string;
  };
  features: {
    enableHolidayMode: boolean;
    showPromotionPopup: boolean;
    enableDecorationToggle: boolean;
  };
  event: EventConfig & { bannerText: string };
  assets: {
    heroImage: string;
    footerLogo: string;
    tiktokIcon: string;
    tetLogo: string;
    tetRibbon: string;
    tetParticle: string;
    settings: AssetSettings;
  };
  labels: {
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
    reviewTitle: string;
    reviewSubtitle: string;
  };
  branches: Branch[];
  services: ServiceItem[];
  gallery: GalleryImage[];
  timeline: TimelineEvent[];
  promotions: Promotion[];
  guideImages: string[];
}