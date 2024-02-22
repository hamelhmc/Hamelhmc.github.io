export interface Portafolio {
  $schema: string;
  settings: Settings;
  aboutMe: AboutMe;
  experience: Experience;
  knowledge: Knowledge;
  careerPreferences: CareerPreferences;
  manfredSpecificData: ManfredSpecificData;
}

export interface AboutMe {
  profile: Profile;
  interestingFacts: InterestingFact[];
  recommendations: Recommendation[];
  relevantLinks: RelevantLink[];
}

export interface InterestingFact {
  topic: string;
  fact: string;
}

export interface Profile {
  name: string;
  surnames: string;
  title: string;
  description: string;
  avatar: Avatar;
  location: Location;
}

export interface Avatar {
  link: string;
  alt: string;
}

export interface Location {
  notes: string;
  country: string;
  region: string;
  municipality: string;
}

export interface Recommendation {
  title: string;
  type: string;
  URL: string;
  authors: Author[];
}

export interface Author {
  name: string;
  surnames: string;
  title: string;
}

export interface RelevantLink {
  type: string;
  URL: string;
}

export interface CareerPreferences {
  contact: Contact;
  preferences: Preferences;
  status: string;
}

export interface Contact {
  publicProfiles: RelevantLink[];
  contactMails: string[];
}

export interface Preferences {
  preferredCompetences: MainStackTech[];
  preferredRoles: string[];
}

export interface MainStackTech {
  name: string;
  type: Type;
}

export enum Type {
  Practice = "practice",
  Technology = "technology",
}

export interface Experience {
  jobs: Job[];
  projects: Project[];
}

export interface Job {
  organization: Organization;
  roles: Role[];
}

export interface Organization {
  name: string;
  image?: Avatar;
}

export interface Role {
  name: string;
  startDate: Date;
  challenges?: Challenge[];
  finishDate?: Date;
  competences?: MainStackTech[];
}

export interface Challenge {
  description: string;
}

export interface Project {
  details: Details;
  type: string;
  roles: Role[];
}

export interface Details {
  name: string;
  description?: string;
  URL?: string;
  image?: Avatar;
}

export interface Knowledge {
  languages: Language[];
  hardSkills: Skill[];
  studies: Study[];
  softSkills: Skill[];
}

export interface Skill {
  skill: MainStackTech;
}

export interface Language {
  name: string;
  fullName: string;
  level: string;
}

export interface Study {
  studyType: string;
  degreeAchieved: boolean;
  name: string;
  startDate: Date;
  institution: Details;
  finishDate: Date;
  linkedCompetences: MainStackTech[];
}

export interface ManfredSpecificData {
  mainStackTechs: MainStackTech[];
  desiredJobDescription: string;
  goodPractices: string;
  projects: Bookmark[];
  bookmarks: Bookmark[];
}

export interface Bookmark {
  name: string;
}

export interface Settings {
  language: string;
  MACVersion: string;
}
