export interface PortafolioNuevo {
  baseUrl: string;
  name: string;
  jobDescription: string;
  about: string;
  experience: Education[];
  education: Education[];
  socialMedia: SocialMedia;
  projects: Project[];
}

export interface Education {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Project {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}

export interface SocialMedia {
  facebook: string;
  twitter: string;
  github: string;
  email: string;
  linkedin: string;
}
