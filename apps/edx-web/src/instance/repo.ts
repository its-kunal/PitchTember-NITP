export interface Repo {
  id: string;
  name: string;
  backImage: string;
  description: string;
  language: string;
  url: string;
  forks: number;
  stars: number;
  watchers: number;
  openQuestions: number;
  closedQuestions: number;
  QAs: number;
  notes: number;
  articles: number;
  createdAt: Date;
  modifiedAt: Date;
  author: {
    username: string;
    url: string;
  };
  contributors: Contributor[];
}

export interface Contributor {
  username: string;
  url: string;
  contributions: number;
}