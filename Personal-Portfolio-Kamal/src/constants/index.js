import project1 from "../assets/projects/LawEase.jpg";
import project2 from "../assets/projects/ExpenseManagement.jpg";
import project3 from "../assets/projects/portfolio.jpg";
import project4 from "../assets/projects/Taskly.jpg";
import project6 from "../assets/projects/NeuroLock.webp";
import project5 from "../assets/projects/project-5.jpg";


export const HERO_CONTENT = `I am a passionate full stack web developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React, Javascript, Tailwind CSS and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack web developer with a passion for creating efficient and user-friendly web applications. With 1+ years of experience, I have worked with a variety of technologies, including React, Javascript,  Tailwind CSS, Next.js, Node.js, MySQL, Express, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I learn Java with DSA and enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  
  {
    year: "2021 - 2025",
    role: "Galgotias College of Engineering and Technology",
    company: "IT.",
    //Image :gcetImage ,
    //description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["CGPA-6.6" ],
  },
  {
    year: "2019 - 2020",
    role: "gcvmLogo",
    company: "Intermediate, CBSE Board",
    //description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Percentage-79"],
  },
  {
    year: "2017 - 2018",
    role: "G.S.V.M.",
    company: " Highschool, CBSE Board",
    //description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Percentage-78"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "LawEase: Legal Consultation Platform",
    image: project1,
    description:
      "LawEase is a responsive legal consultation portal designed to streamline client-lawyer interactions. Built with React and Bootstrap, it features dynamic form validation to minimize submission errors and a mobile-first interface that improved site performance by 25%. Optimized MongoDB queries reduced data retrieval time by 40%, while reusable React components cut code redundancy by 20%. The project highlights my ability to balance user-centric design with robust backend efficiency, ensuring seamless experiences for both clients and service providers.",
    technologies: ["React", "Bootstrap", "EmailJS",  "CSS"],
    link: "#" // Add actual link here
  },
  {
    title: "ExpenseTrack: Financial Analytics Dashboard",
    image: project2,
    description:
      "ExpenseTrack is a full-stack financial management platform built with the MERN stack, offering secure expense tracking and data visualization. Features include JWT authentication, role-based access control, and a dynamic dashboard with pie/bar charts for spending insights. Integrated Redux for centralized state management and React-Bootstrap for responsive design across devices. Deployed via AWS Amplify (frontend) and Render (backend) with CI/CD pipelines, ensuring scalable performance and seamless updates.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    link: "https://expense-tracker-app-three-beryl.vercel.app/"
  },
  {
    title: "NeuroLock: Secure Password Manager",
    image: project6,
    description:
      "NeuroLock is a robust password management solution built with React, Express, and MongoDB. Features include AES-256 encryption for sensitive data, real-time password strength analysis, and user activity logs for accountability. Optimized MongoDB queries reduced data retrieval latency by 40%, while modular React components improved code maintainability. Designed with Tailwind CSS for a clean interface and deployed with Docker for scalable, containerized security.",
    technologies: ["React", "Express", "MongoDB", "Tailwind CSS", "AES Encryption", "JWT", "Docker"],
    link: "#" // Add deployment/GitHub link here
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.Developed a responsive and visually appealing portfolio website using React, a popular JavaScript library for building user interfaces, and Tailwind CSS, a utility-first CSS framework for styling and layout.",
    technologies: ["React", "Tailwind CSS"],
    link: "#home"
  },
  
  {
    title: "Taskly: Dynamic Task Management Tool",
    image: project4,
    description:
      "Taskly is a minimalist yet powerful task-tracking web app built with HTML, CSS, and JavaScript. Features include drag-and-drop prioritization, deadline tracking with visual alerts for overdue tasks, and a modular codebase optimized for maintainability. Streamlined user workflows by implementing intuitive task categorization and reducing UI clutter, resulting in a 30% faster task completion rate. Designed for cross-device responsiveness, ensuring seamless usability on desktops, tablets, and mobile browsers.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#" // Add actual link here
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Alpha 1, B - 139 Greater Noida Uttar Predesh",
  phoneNo: "+91 9198324950",
  email: "kamalnayan4302@gmail.com",
};
