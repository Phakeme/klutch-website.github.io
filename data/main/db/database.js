import Mock from "./mock";
const database = {
  info: {
    Headline: "Top Female Plastic Surgeon in Durban",
    subHeadline:
      "Plastic, Reconstruction and Aesthetic Surgery. Committment to excellence and attention to details.",
    brandImage: "",
    aboutImage: "",
    aboutImageLg: "",
    cvfile: "",
  },
  services: [
    {
      title: "Web Development",
      icon: "code",
      details:
        "I started with WordPress, Woocommerce at the beginning and then I got interested in HTML, CSS, JavaScript and React.",
    },
  ],
  skills: [
    {
      title: "Photoshop",
      value: 89,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "NN Legal Consulting Website",
      subtitle: "Tools used: HTML, CSS, JavaScript, React, Photoshop",
      imageUrl: "/images/nnlegal-mockup-preview.jpg",
      largeImageUrl: ["/images/nnlegal-mockup.jpg"],
      url: "https://www.nnlegalconsulting.co.za/",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 2,
        year: "2017 - present",
        position: "Web Development",
        company: "Freelance",
        details:
          "My main responsibility is to design and build websites to the client's specifications. This often involves sketching basic concepts, creating draft websites, and making revisions as requested by the client.",
      },
      {
        id: 1,
        year: "2017 - Present",
        position: "Designer",
        company: "Art Printers",
        details: "Graphic / Web Designer.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020",
        graduation: "JavaScript Algorithms and Data Structures",
        university: "freeCodeCamp.org",
        details: "Learning fundamental programming concepts in JavaScript",
      },
    ],
  },
  contactInfo: {
    tell: "(031) 100 0012",
    email: "info@klutchplasticsugery.com",
    address: ["477 Anton Lembede St, Durban Central"],
    socialLinks: {
      facebook: "",
      twitter: "",
    },
  },
  opendays: [{
    weekdays: "Weekdays: 8am – 5pm",
    saturday: "Saturday: 8am – 2pm",
    sunday: "Sunday: Closed",
  }],
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.info;
  return [200, response];
});

Mock.onGet("/api/opendays").reply((config) => {
  const response = database.opendays;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
