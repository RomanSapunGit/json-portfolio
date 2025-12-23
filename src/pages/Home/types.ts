export interface About {
  name: string;
  position: string;
  school: string;
  status: string;
  interests: string[];
  achievements: string[];
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
  Email: Link;
  Phone: string;
  Location: string;
}

interface Language {
  level: string
}

export interface Languages {
  Polish: Language;
  English: Language;
  Ukrainian: Language
}
