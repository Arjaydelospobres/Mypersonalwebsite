import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  java,
  mysql,
  nodejs,
  firebase,
  git,
  python,
  united,
  android,
  phinma,

} from "../assets";

import {
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7,
  n8,
  n9,
  n10,
  n11,
  n12,
  n13
} from "../assets/gallery"
import{
  barangay,
  barangayapps,
  attendance,
  trancycle,
  employment,
  herbal,
  epython,
  rechapcha,
  motion,
  hack,
  lrmc,
  unified,
  attendancekid,
} from "../assets/projects"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "android",
    icon: android,
  },
];

const experiences = [
  {
    title: "Data Encoder",
    company_name: "Phinma Araullo University",
    icon: phinma,
    iconBg: "#383E56",
    date: "November 2022 - December 2022",
    points: [
      "Add new student profile on school portal website",
      "Send official registration form to the student using email",
      "Update call logs of the students",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "United Neon Advertising(Retailgate)",
    icon: united,
    iconBg: "#383E56",
    date: "January 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and a good backend.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Phinma Au Op Christmass party (Dec. 20, 2022)",
    image: n1
  },
  {
    testimonial: "Phinma Au OP",
    image: n2
  },
  {
    testimonial: "Phinma Au OP(data encoder)",
    image: n3
  },
  {
    testimonial: "Phinma Au OP(Before Christmass Party)",
    image: n4
  },
  {
    testimonial: "United Neon First Day",
    image: n5
  },
  {
    testimonial: "United Neon First project",
    image: n6
  },
  {
    testimonial: "United Neon First project",
    image: n7
  },
  {
    testimonial: "Phinma Au event with my co-intern",
    image: n8
  },
  {
    testimonial: "United Neon (Retailgate Feb 14 celebration)",
    image: n9
  },
  {
    testimonial: "Phinma Au OP Christmass party Dance training",
    image: n10
  },
  {
    testimonial: "Ratailgate (AR testing)",
    image: n11
  },
  {
    testimonial: "Ratailgate Meeting with the project",
    image: n12
  },
 
  {
    testimonial: "Ratailgate co-intern",
    image: n13
  },
 
 
];

const projects = [
  {
    name: "Barangay Information System",
    description:
      "The project itself is very useful and user-friendly as it can. The used in the system consist simple GUI which is a type of interface that allows user to interact with electronic devices through graphical icons and visual indicators. The project intends that the Barangay Camp Tinio is easy to adapt the new era. This system help to improve the information system of Barangay Camp Tinio by creating web-based and mobile system the help them to reduce time needed for recovery of the files and accessing basic information in the Barangay",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: barangay,
    source_code_link:
      "https://github.com/Arjaydelospobres/Barangay_Information_System",
  },
  {
    name: "BIS Apps",
    description:
      " The app allows residents the convenient access to some of Brgy. Camp Tinio functionalities e.g. processing of Brgy. clearance and other important documents, keeping the residents updated to recent news and updates within the barangay. The residents can also communicate with the website admin and can also send report or incident",
    tags: [
      {
        name: "Anroid Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: barangayapps,
    source_code_link:
      "https://github.com/Arjaydelospobres/Brgy-Camp-Tinio-Mobile-App",
  },
  {
    name: "Attendance System",
    description:
      " This system is intended to create and easily manage the class and examination schedule of an institution using PHP and Mysqli. Easily tracking of conflicts on the teacher, students, and room schedule will be detected by the system to avoid redundancy and inconsistency. This will greatly ease the person-in-charge responsibilities in doing schedules at the start of the semester and examination.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Bootsrap CSS",
        color: "pink-text-gradient",
      },
    ],
    image: attendance,
    // source_code_link: "",
  },
  {
    name: "Trancycle",
    description: "This system use reactjs",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: trancycle,
    source_code_link: "https://github.com/Arjaydelospobres/transcycle",
  },
  {
    name: "Employment System",
    description: "This project was created during my class in Advance Wed Dev(Sir Mikel Legaspi) ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Bootsrap CSS",
        color: "pink-text-gradient",
      },
    ],
    image: employment,
    source_code_link: "https://github.com/Arjaydelospobres/Employment",
  },
  {
    name: "Herbal Plant Apps",
    description: "This project was created during my class in Application dev and emerging technology(Sir John Leabres) ",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: herbal,
    source_code_link: "https://github.com/Arjaydelospobres/herbalism",
  },
  {
    name: "Employee Payroll Management System",
    description: "This project was created during my class in Integrative Programming and Technology(Sir John Leabres) ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
    ],
    image: epython,
    source_code_link: "https://github.com/Arjaydelospobres/Python-employee",
  },
  {
    name: "Rechapcha",
    description: "This project was created during my class in Information Assurance and security(Sir John Leabres) ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Rechapcha api",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
    ],
    image: rechapcha,
    source_code_link: "https://github.com/Arjaydelospobres/Rechaptcha",
  },
  {
    name: "Motion Detection Python",
    description: "This project was created during my class in Intellegence System(Sir John Leabres) ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
     
    ],
    image: motion,
    source_code_link: "https://github.com/Arjaydelospobres/Motion-detection",
  },
  {
    name: "Crypto (Hackaton PSITE)",
    description: "This project was created during the competition on Hackaton PSITE",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "Bootsrap CSS",
        color: "pink-text-gradient",
      },
     
    ],
    image: hack,
    source_code_link: "https://github.com/RAITE-2022-Hackathon/RAITE-22_PAU_Team2",
  },
  {
    name: "LRMC",
    description: "This project was created during my OJT in Unted Neon my role in this project back end using firebase",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
     
    ],
    image: lrmc,
    // source_code_link: "",
  },
  {
    name: "Unified",
    description: "This project was created during my OJT in Unted Neon my role in this project is map design and dashboard",
    tags: [
      {
        name: "Code ignitor",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
     
    ],
    image: unified,
    // source_code_link: "asdasdsad",
  },
  {
    name: "Attendance Kid",
    description: "This project was created during my OJT in Unted Neon my role in this project is camera implementation and qr code generator",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
     
    ],
    image: attendancekid,
    // source_code_link: "asdasd",
  },
];

export { services, technologies, experiences, testimonials, projects };
