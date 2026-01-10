
import React from 'react';

export interface Branch {
  id: number;
  address: string;
  phone: string;
  mapLink?: string; 
  googleMapReviewLink?: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  span?: boolean; 
}

export interface DecorationAsset {
  src: string;
  className: string;
  style?: React.CSSProperties;
}

export interface ParticleLayer {
  count: number;
  imgUrl?: string; 
  minSize: number;
  maxSize: number;
  animationName: 'snowfall' | 'fireworkPop'; 
  className?: string; 
}

export interface ThemeData {
  stickerBottomRight?: DecorationAsset;
  stickerTopLeft?: DecorationAsset;
  particles: ParticleLayer[];
  accentColor?: string; // Color for theme-specific backgrounds
  bgClass?: string;     // Tailwind class for background
}

export type EventTheme = 'none' | 'tet' | 'christmas' | 'halloween' | 'womens_day';

export interface EventConfig {
  theme: EventTheme;
  showStickers: boolean; 
  showFallingEffect: boolean; 
}

export interface Promotion {
  id: number;
  title: string;
  imageUrl?: string; 
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  isActive: boolean; 
}

export interface TimelineEvent {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  icon?: React.ReactNode;
}
