export interface Activity {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  category: string;
}

export interface Space {
  id: number;
  name: string;
  image: string;
}

export interface Device {
  id: number;
  name: string;
  description: string;
  image: string;
  specifications: string[];
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  capacity: string;
  price: string;
  image: string;
  available: boolean;
}

export interface RegulationArticle {
  chapter: number;
  chapterTitle: string;
  articles: {
    number: number;
    content: string;
  }[];
}
