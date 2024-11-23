export default {
  app: {
    name: "Chatons Admin",
    description: "Admin panel for Chatons's servers",
  },
  home: {
    title: "Home",
    hello: "Hello hello!",
    intro: "Welcome to the Chatons Admin panel! Here you can view and manage Chatons's servers.",
  },
  servers: {
    title: "Servers",
    status: "Status",
    online: "Online",
    offline: "Offline",
    unknown: "Unknown",
  },
  header: {
    title: "Chatons Admin",
    theme: {
      light: "Light mode",
      dark: "Dark mode",
    },
  },
  template: {
    title: "{title} | Chatons Admin",
  },
} as const
