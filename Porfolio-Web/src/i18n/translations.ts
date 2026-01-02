export const translations = {
  en: {
    nav: {
      experiencia: "Experience",
      proyectos: "Projects",
      certificados: "Certificates",
      sobreMi: "About Me",
      contacto: "Contact",
    },
    hero: {
      available: "Available for work",
      name: "Hey, I'm Mateo",
      experience: "Junior Developer on Programming and Cybersecurity lover",
      title: "from Uruguay",
      location: "",
      desc: "Specialized in development of unique web applications.",
      contactMe: "Contact Me",
      linkedin: "LinkedIn",
    },
    aboutMe: {
      intro: "My name is Mateo Parentini and I'm 18 years old. I started in the world of computer science as a child with robotics, and later developed a passion for programming. Currently, I am",
      bold1: "working on multiple personal projects.",
      desc: "As a Junior Programmer,",
      bold2: "I have various projects in different programming languages, and I have a habit of always learning new things",
      goal: "My goal is to continue learning new technologies to make an essential contribution to the world of IT.",
    },
    certificates: {
      title: "Certificates",
      desc: "Below is a selection of my certificates. Showing my knowledge in different fields of programming and cybersecurity. As well as in languages like English.",
      close: "Close ✕",
      items: {
        cyber: { title: "Junior Cybersecurity Analyst", desc: "Cisco Cybersecurity Certification and Threat Analysis" },
        first: { title: "First Certificate B2 English", desc: "Cambridge English B2 Certification" },
        b2it: { title: "English B2 in IT", desc: "English B2 level specialized in technology" },
        sql: { title: "SQL Fundamentals", desc: "Database fundamentals and SQL language" },
        sqli: { title: "SQL Injection Attacks", desc: "Database security and SQL attack prevention" },
        excel: { title: "Microsoft Excel", desc: "Advanced spreadsheet mastery and data analysis" },
        python: { title: "Python Programming", desc: "Python programming and application development" },
        java: { title: "Java Development", desc: "Java programming and software development" },
      },
    },
    projects: {
      title: "Projects",
      code: "Code",
      preview: "Preview",
    },
    projectsItems: {
      lacha: {
        title: "La Chacra Gourmet",
        desc: "Web system for a restaurant with reservations, a dashboard and employee management. Built with React, Tailwind CSS and PHP.",
      },
      br: {
        title: "Real Estate",
        desc: "Web system to buy and sell properties. Built with PHP, SCSS and JavaScript.",
      },
      rh: {
        title: "Human Resources",
        desc: "Web application for Human Resources management. Built with Java, Spring Boot, HTML and CSS.",
      },
    },
    footer: {
      copyright: "All rights reserved",
      aboutMe: "About Me",
      contact: "Contact",
    },
  },
}

export function getTranslation(lang: string, key: string): string {
  const langObj = translations.en
  const keys = key.split(".")
  let value: any = langObj

  for (const k of keys) {
    value = value[k]
    if (!value) return key
  }

  return value as string
}
