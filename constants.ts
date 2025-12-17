import { ExpertProfile, ImageAsset } from './types';

export const EXPERT_DATA: ExpertProfile = {
  name: "Rafa Bueno",
  role: "Personal Trainer",
  motto: "Mente forte não habita em corpo fraco!",
  location: "Guarulhos, SP",
  awards: ["Prêmio Excellence 2019 - Melhor Professor"],
  whatsappUrl: "https://api.whatsapp.com/send?1=pt_BR&phone=5511934948400",
  instagramUrl: "https://www.instagram.com/rafabueno.personal/"
};

export const HERO_IMAGE = "https://i.imgur.com/p5oAthQ.png";
export const SECONDARY_IMAGE = "https://i.imgur.com/fD2nHa7.png";

// Updated gallery with provided distinct images
export const RESULTS_GALLERY: ImageAsset[] = [
  { id: '1', src: "https://i.imgur.com/9ggGjET.png", alt: "Evolução Aluno 1" },
  { id: '2', src: "https://i.imgur.com/tmOL4Lu.png", alt: "Evolução Aluno 2" },
  { id: '3', src: "https://i.imgur.com/k9YU9mb.png", alt: "Evolução Aluno 3" },
  { id: '4', src: "https://i.imgur.com/WnqH778.png", alt: "Evolução Aluno 4" },
];

export const BACKSTAGE_IMAGES = [
  "https://i.imgur.com/Yn7zfU7.png",
  "https://i.imgur.com/Oa0FNoX.png",
  "https://i.imgur.com/2zohjAE.png"
];