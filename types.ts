import React from 'react';

export interface ExpertProfile {
  name: string;
  role: string;
  motto: string;
  location: string;
  awards: string[];
  whatsappUrl: string;
  instagramUrl: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  id: string;
}

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}