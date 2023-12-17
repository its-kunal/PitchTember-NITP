import { Repo } from "@/instance/repo";

export const sampleRepo: Repo = {
  id: "123456",
  name: "sample-repo",
  backImage: "https://example.com/image.jpg",
  description: "This is a sample repository.",
  language: "TypeScript",
  url: "https://github.com/example/sample-repo",
  forks: 10,
  stars: 50,
  watchers: 30,
  openQuestions: 5,
  closedQuestions: 20,
  QAs: 25,
  notes: 15,
  articles: 10,
  createdAt: new Date(),
  modifiedAt: new Date(),
  author: {
    username: "exampleuser",
    url: "https://github.com/exampleuser",
  },
  contributors: [
    {
      username: "contributor1",
      url: "https://github.com/contributor1",
      contributions: 10,
    },
    {
      username: "contributor2",
      url: "https://github.com/contributor2",
      contributions: 5,
    },
  ],
};