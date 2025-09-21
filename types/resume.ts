export interface Location {
  lat: number;
  lng: number;
}

export interface BasicInfo {
  title: string;
  email: string;
  website: string;
  skype: string;
  phone: string;
  address: string;
}

export interface NarrativeItem {
  title: string;
  institute: string;
  year: string;
  shortDesc: string;
  longDesc: string;
}

export interface Skill {
  name: string;
  rating: number;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  tech: string[];
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface Resume {
  name: string;
  title: string;
  location: Location;
  basic: BasicInfo;
  about: {
    description: string;
    resumeUrl: string;
  };
  education: NarrativeItem[];
  experience: NarrativeItem[];
  skills: Record<string, Skill[]>;
  projects?: Project[];
  social?: SocialLink[];
}
