import { User } from "@/instance/user";

export const sampleUser: User = {
  name: "Alice Smith",
  username: "alicessmith",
  password: "hashed_password", // replace with actual hashed password
  email: "alice.smith@email.com",
  phone: "+1234567890",
  website: "https://alicessmith.com",
  company: "Acme Inc.",
  contributions: "50+ open source projects",
  repos: [
    "https://github.com/alicessmith/react-starter-kit",
    "https://github.com/alicessmith/vue-pwa-template",
    "https://github.com/alicessmith/machine-learning-crash-course",
  ],
  followers: 1256,
  following: 328,
};