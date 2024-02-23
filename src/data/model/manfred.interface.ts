export type Portafolio = {
  $schema: string;
  settings: Settings;
  aboutMe: AboutMe;
  experience: Experience;
  knowledge: Knowledge;
  careerPreferences: CareerPreferences;
  manfredSpecificData: ManfredSpecificData;
}

export type AboutMe = {
  profile: Profile;
  interestingFacts: InterestingFact[];
  recommendations: Recommendation[];
  relevantLinks: RelevantLink[];
}

export type InterestingFact = {
  topic: string;
  fact: string;
}

export type Profile = {
  name: string;
  surnames: string;
  title: string;
  description: string;
  avatar: Avatar;
  location: Location;
}

export type Avatar = {
  link: string;
  alt: string;
}

export type Location = {
  notes: string;
  country: string;
  region: string;
  municipality: string;
}

export type Recommendation = {
  title: string;
  type: string;
  URL: string;
  authors: Author[];
}

export type Author = {
  name: string;
  surnames: string;
  title: string;
}

export type RelevantLink = {
  type: string;
  URL: string;
}

export type CareerPreferences = {
  contact: Contact;
  preferences: Preferences;
  status: string;
}

export type Contact = {
  publicProfiles: RelevantLink[];
  contactMails: string[];
}

export type Preferences = {
  preferredCompetences: MainStackTech[];
  preferredRoles: string[];
}

export type MainStackTech = {
  name: string;
  type: Type;
}

export enum Type {
  Practice = "practice",
  Technology = "technology",
}

export type Experience = {
  jobs: Job[];
  projects: Project[];
}

export type Job = {
  organization: Organization;
  roles: Role[];
}

export type Organization = {
  name: string;
  image?: Avatar;
}

export type Role = {
  name: string;
  startDate: Date;
  challenges?: Challenge[];
  finishDate?: Date;
  competences?: MainStackTech[];
}

export type Challenge = {
  description: string;
}

export type Project = {
  details: Details;
  type: string;
  roles: Role[];
}

export type Details = {
  name: string;
  description?: string;
  URL?: string;
  image?: Avatar;
}

export type Knowledge = {
  languages: Language[];
  hardSkills: Skill[];
  studies: Study[];
  softSkills: Skill[];
}

export type Skill = {
  skill: MainStackTech;
}

export type Language = {
  name: string;
  fullName: string;
  level: string;
}

export type Study = {
  studyType: string;
  degreeAchieved: boolean;
  name: string;
  startDate: Date;
  institution: Details;
  finishDate: Date;
  linkedCompetences: MainStackTech[];
}

export type ManfredSpecificData = {
  mainStackTechs: MainStackTech[];
  desiredJobDescription: string;
  goodPractices: string;
  projects: Bookmark[];
  bookmarks: Bookmark[];
}

export type Bookmark = {
  name: string;
}

export type Settings = {
  language: string;
  MACVersion: string;
}
