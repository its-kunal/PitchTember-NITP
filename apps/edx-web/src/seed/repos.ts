import { Repo } from "@/instance/repo";

export const REPOS: Repo[] = [
  {
    id: "1",
    name: "React Open Source Components Starter Kit",
    backImage: "/images/repos/react-starter-kit.jpg",
    description:
      "A boilerplate for building and publishing reusable React components with ease.",
    language: "TypeScript",
    url: "https://github.com/your-username/react-starter-kit",
    forks: 257,
    stars: 3482,
    watchers: 3901,
    openQuestions: 12,
    closedQuestions: 5,
    QAs: 17,
    notes: 48,
    articles: 3,
    createdAt: new Date(2023, 10, 25),
    modifiedAt: new Date(2023, 12, 15),
    author: {
      username: "your-username",
      url: "https://github.com/your-username",
    },
    contributors: [
      {
        username: "contributor1",
        url: "https://github.com/contributor1",
        contributions: 15,
      },
      {
        username: "contributor2",
        url: "https://github.com/contributor2",
        contributions: 7,
      },
    ],
  },

  // 2. Vue.js Progressive Web App Template
  {
    id: "2",
    name: "Vue.js Progressive Web App Template",
    backImage: "/images/repos/vue-pwa-template.jpg",
    description:
      "A quickstart template for building modern and high-performance PWAs with Vue.js.",
    language: "JavaScript",
    url: "https://github.com/your-username/vue-pwa-template",
    forks: 189,
    stars: 1923,
    watchers: 2214,
    openQuestions: 8,
    closedQuestions: 3,
    QAs: 11,
    notes: 27,
    articles: 2,
    createdAt: new Date(2023, 7, 14),
    modifiedAt: new Date(2023, 12, 12),
    author: {
      username: "your-username",
      url: "https://github.com/your-username",
    },
    contributors: [
      {
        username: "contributor3",
        url: "https://github.com/contributor3",
        contributions: 12,
      },
    ],
  },

  // 3. Python Microservices Boilerplate with Docker
  {
    id: "3",
    name: "Python Microservices Boilerplate with Docker",
    backImage: "/images/repos/python-microservices-boilerplate.jpg",
    description:
      "A starter project for building scalable and containerized microservices using Python and Docker.",
    language: "Python",
    url: "https://github.com/your-username/python-microservices-boilerplate",
    forks: 152,
    stars: 1589,
    watchers: 1802,
    openQuestions: 5,
    closedQuestions: 2,
    QAs: 7,
    notes: 17,
    articles: 1,
    createdAt: new Date(2023, 5, 20),
    modifiedAt: new Date(2023, 12, 8),
    author: {
      username: "your-username",
      url: "https://github.com/your-username",
    },
    contributors: [
      {
        username: "contributor5",
        url: "https://github.com/contributor5",
        contributions: 12,
      },
    ],
  },

  // 4. Machine Learning Crash Course - TensorFlow Edition
  {
    id: "4",
    name: "Machine Learning Crash Course - TensorFlow Edition",
    backImage: "/images/repos/machine-learning-crash-course.jpg",
    description:
      "A guided hands-on introduction to machine learning with TensorFlow and Python.",
    language: "Jupyter Notebook",
    url: "https://github.com/your-username/machine-learning-crash-course",
    forks: 527,
    stars: 7824,
    watchers: 8442,
    openQuestions: 17,
    closedQuestions: 10,
    QAs: 27,
    notes: 32,
    articles: 5,
    createdAt: new Date(2023, 3, 9),
    modifiedAt: new Date(2023, 12, 5),
    author: {
      username: "your-username",
      url: "https://github.com/your-username",
    },
    contributors: [
      {
        username: "contributor4",
        url: "https://github.com/contributor4",
        contributions: 20,
      },
      {
        username: "contributor5",
        url: "https://github.com/contributor5",
        contributions: 12,
      },
    ],
  },

  // 5. Node.js REST API Starter Kit with Express.js
  {
    id: "5",
    name: "Node.js REST API Starter Kit with Express.js",
    backImage: "/images/repos/express-rest-api-starter-kit.jpg",
    description:
      "A simple and clean boilerplate for building secure and efficient REST APIs with Node.js and Express.js.",
    language: "JavaScript",
    url: "https://github.com/your-username/express-rest-api-starter-kit",
    forks: 138,
    stars: 1295,
    watchers: 1503,
    openQuestions: 6,
    closedQuestions: 4,
    QAs: 10,
    notes: 21,
    articles: 2,
    createdAt: new Date(2023, 1, 18),
    modifiedAt: new Date(2023, 12, 1),
    author: {
      username: "your-username",
      url: "https://github.com/your-username",
    },
    contributors: [
      {
        username: "contributor5",
        url: "https://github.com/contributor5",
        contributions: 12,
      },
    ],
  },
];