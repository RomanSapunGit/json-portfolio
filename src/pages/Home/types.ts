export interface About {
  name: string;
  position: string;
  location: string;
  school: string;
  status: string;
  interests: string[];
  achievements: string[];
  email: string;
  phone: string;
  languages: Languages;
}

interface Link {
  linkName: string;
  linkUrl: string;
}

export interface Links {
  LinkedIn: Link;
  GitHub: Link;
  Telegram: Link;
}

interface Language {
  level: string
}

export interface Languages {
  Polish: Language;
  English: Language;
  Ukrainian: Language
}
