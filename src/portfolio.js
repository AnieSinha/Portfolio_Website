/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Anisha",
  logo_name: "Anisha.S()",
  nickname: "Anisha2003 / anie",
  full_name: "Anisha Sinha",
  subTitle:
    "a Full Stack Developer, blending creativity and code to build impactful web experiences. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1yHcJn6ff2XK69he-_MkMVf1UGPykbzE5/view?usp=drive_link",
  mail: "mailto:aniesinha240803@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/AnieSinha",
  linkedin: "https://www.linkedin.com/in/anisha-sinha-29893b264/",
  gmail: "aniesinha240803@gmail.com",
  gitlab: " ",
  facebook: " ",
  // twitter: " ",
  instagram: "https://www.instagram.com/anishasinha2408/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and dynamic web applications using React.js, Next.js, HTML, CSS, and JavaScript (ES6+).",
        "⚡ Developing robust backend services and RESTful APIs with Node.js, Express.js",
        "⚡ Working with databases like PostgreSQL and Firebase for efficient data storage and management.",
      ],
      softwareSkills: [
        {
  skillName: "HTML5",
  fontAwesomeClassname: "simple-icons:html5",
  style: { color: "#E34F26" },
},
{
  skillName: "CSS3",
  fontAwesomeClassname: "simple-icons:css3",
  style: { color: "#1572B6" },
},
{
  skillName: "JavaScript",
  fontAwesomeClassname: "simple-icons:javascript",
  style: { backgroundColor: "#FFFFFF", color: "#F7DF1E" },
},
{
  skillName: "Java",
  fontAwesomeClassname: "logos:java", // ✅ changed for guaranteed rendering
  style: { color: "#f89820" },
},
{
  skillName: "C",
  fontAwesomeClassname: "simple-icons:c",
  style: { color: "#A8B9CC" },
},
{
  skillName: "ReactJS",
  fontAwesomeClassname: "simple-icons:react",
  style: { color: "#61DAFB" },
},
{
  skillName: "NextJS",
  fontAwesomeClassname: "simple-icons:nextdotjs",
  style: {
    color: "#FFFFFF",
    backgroundColor: "#1D1D1D",
    borderRadius: "50%",
  },
},
{
  skillName: "Tailwind CSS",
  fontAwesomeClassname: "simple-icons:tailwindcss",
  style: { color: "#06B6D4" },
},
{
  skillName: "Bootstrap",
  fontAwesomeClassname: "simple-icons:bootstrap",
  style: { color: "#7952B3" },
},
{
  skillName: "NodeJS",
  fontAwesomeClassname: "simple-icons:nodedotjs",
  style: { color: "#339933" },
},
{
  skillName: "ExpressJS",
  fontAwesomeClassname: "simple-icons:express",
  style: {
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderRadius: "5px",
  },
},
{
  skillName: "Firebase",
  fontAwesomeClassname: "simple-icons:firebase",
  style: { color: "#FFCA28" },
},
{
  skillName: "PostgreSQL",
  fontAwesomeClassname: "simple-icons:postgresql",
  style: { color: "#336791" },
},
{
  skillName: "MongoDB",
  fontAwesomeClassname: "simple-icons:mongodb",
  style: { color: "#47A248" },
},
{
  skillName: "MySQL",
  fontAwesomeClassname: "simple-icons:mysql",
  style: { color: "#4479A1" },
},
{
  skillName: "WordPress",
  fontAwesomeClassname: "simple-icons:wordpress",
  style: { color: "#21759B" },
},
{
  skillName: "Git",
  fontAwesomeClassname: "simple-icons:git",
  style: { color: "#E94E32" },
},
{
  skillName: "GitHub",
  fontAwesomeClassname: "simple-icons:github",
  style: { color: "#181717" },
},
{
  skillName: "VS Code",
  fontAwesomeClassname: "simple-icons:visualstudiocode",
  style: { color: "#0078D7" },
},
{
  skillName: "Figma",
  fontAwesomeClassname: "simple-icons:figma",
  style: { color: "#F24E1E" },
},
{
  skillName: "Vercel",
  fontAwesomeClassname: "simple-icons:vercel",
  style: {
    color: "#FFFFFF",
    backgroundColor: "#000000",
    borderRadius: "50%",
  },
},

      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dayananda Sagar College of Engineering",
      subtitle: "B.E. in Computer science Engineering",
      logo_path: "dsce.png",
      alt_name: "DSCE",
      duration: "2022 - Present",
      descriptions: [
        "⚡ Studied Advanced Software Development Concepts, Data Management & Warehousing",
        "⚡ Learn Advanced Topics in Cloud Computing, Cloud Architecture along with Serverless Computing",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://www.dsce.edu.in/",
    },
    {
      title: "Darbhanga Public School",
      subtitle: "Science Stream",
      logo_path: "DPS.png",
      alt_name: "DPS",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Completed with 91%, specializing in Physics, Chemistry, Mathematics, and Computer Science, and strengthening problem-solving and programming skills. ",
      ],
      website_link: "http://www.dapsdbg.com/",
    },
    {
      title: "Holy Cross School",
      subtitle: "Science Stream",
      logo_path: "hcs.png",
      alt_name: "HCS",
      duration: "Completed in 2020",
      descriptions: [
        "⚡ Completed with 91.4%, building a strong academic foundation and early interest in technology and innovation. ",
      ],
      website_link: "http://holycrossschooldbg.org/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
      ],
    }

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects showcase a blend of full-stack web development and AI integration using modern frameworks and tools. I’ve built scalable, responsive, and user-focused applications that combine clean UI design with real-world functionality. Below are some of my featured projects that highlight my expertise in React, Next.js, Node.js, and emerging AI technologies.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Anisha2.png",
    description:
      "You can contact me at the places mentioned below.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
      // "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    // link: "https://medium.com/@Anishapatel99",
    // avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
  {
    name: "AI-Powered Resume Analyzer",
    url: "https://github.com/AnieSinha/ai-resume-analyzer",
    description:
      "Full-stack AI resume analyzer built with React, Tailwind CSS, Zustand, and Puter.js. Includes authentication, resume upload, personalized AI evaluation, and ATS scoring using a serverless architecture. Modular, reusable components and fully responsive UI.",
    languages: [
      { name: "React", iconifyClass: "logos-react" },
      { name: "Tailwind CSS", iconifyClass: "simple-icons:tailwindcss" },
      { name: "Redux (Zustand)", iconifyClass: "logos:redux" },
      { name: "Puter.js", iconifyClass: "logos-javascript" },
    ],
  },
  {
    name: "PrepGenie – AI Interview Platform",
    url: "https://github.com/AnieSinha/interview_prep",
    description:
      "AI-driven interview preparation platform built using Next.js, Firebase, Tailwind CSS, and shadcn/ui. Features authentication, user dashboard, modular components, and AI-based interview simulations with voice support via GPT + TTS.",
    languages: [
      { name: "Next.js", iconifyClass: "logos-nextjs" },
      { name: "Firebase", iconifyClass: "logos-firebase" },
      { name: "Tailwind CSS", iconifyClass: "simple-icons:tailwindcss" },
      { name: "UI Library (shadcn/ui)", iconifyClass: "mdi:palette-outline" },
    ],
  },
  {
    name: "Fitnix – Fitness Exercises Web App",
    url: "https://github.com/AnieSinha/fitnix",
    description:
      "Modern fitness web app built using React 18, Material UI, and Tailwind CSS. Integrates RapidAPI ExerciseDB and YouTube API for dynamic exercise information. Implements hooks, modular components, search, filters, and a responsive layout.",
    languages: [
      { name: "React", iconifyClass: "logos-react" },
      { name: "Material UI", iconifyClass: "simple-icons:mui" },
      { name: "Tailwind CSS", iconifyClass: "simple-icons:tailwindcss" },
      { name: "API Integration", iconifyClass: "mdi:api" },
    ],
  },
  {
    name: "Portfolio Website",
    url: "https://github.com/AnieSinha/Portfolio_Website",
    description:
      "Personal developer portfolio built with Next.js and Tailwind CSS. Showcases skills, projects, and achievements in a clean, responsive, and customizable design. Deployed on Vercel with optimized performance and accessibility.",
    languages: [
      { name: "Next.js", iconifyClass: "logos-nextjs" },
      { name: "Tailwind CSS", iconifyClass: "simple-icons:tailwindcss" },
      { name: "Vercel", iconifyClass: "logos-vercel" },
      { name: "JavaScript", iconifyClass: "logos-javascript" },
    ],
  },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
