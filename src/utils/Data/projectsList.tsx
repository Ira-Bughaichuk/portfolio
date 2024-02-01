import { Project } from "../types";
import carp from './../../../public/images/carp-travel.png';
import kapustf from '../../../public/images/phonebook.jpg';
import labrary from '../../../public/images/labrary.png';
import mobileApp from '../../../public/images/mobile-app.png';

export const projectsList: Project[] = [
  {
    id: 1,
    title: "Kapusta",
    subTitle:
      "React (Hooks, Routers, Redux, Redux Toolkit), Styled Component, Axios",
    description:
      "This is a team project in which I was responsible for implementing the following components: expense and income reporting. Specifically, the ability to enter data into a table, delete data according to categories on a selected day. Additionally, the application is responsive, adapting to phone, tablet, and computer screen extensions. Role: Develope",
    image: "/images/phonebook.jpg",
    pathToGitHub: "/",
    pathToLivePage: "/",
    tag: ["All", "Pet"],
  },
  {
    id: 2,
    title: "Carp Trevel",
    subTitle: "Next.js Tailwind CSS, TypeScript",
    description: "This is a simple phone book that utilizes the Swagger backend API.",
    image: "/images/carp-travel.png",
    pathToGitHub: "/",
    pathToLivePage: "/",
    tag: ["All", "Pet"],
  },
  {
    id: 3,
    title: "Phonebook",
    subTitle: "React , Redux Toolkit, SASS, Axios",
    description: " It allows users to register and log in, add, delete, and filter contacts, as well as log out. Role: Developer.",
    image: "/images/phonebook.jpg",
    pathToGitHub: "/",
    pathToLivePage: "/",
    tag: ["All", "Com"],
  },
  {
    id: 4,
    title: "mobile-app",
    subTitle: "HTML, CSS, JS, SASS",
    description: " It allows users to register and log in, add, delete, and filter contacts, as well as log out. Role: Developer. It allows users to register and log in, add, delete, and filter contacts, as well as log out. Role: Developer. It allows users to register and log in, add, delete, and filter contacts, as well as log out. Role: Developer.",
    image: "/images/mobile-app.png",
    pathToGitHub: "/",
    pathToLivePage: "/",
    tag: ["All", "Com"],
  },
];
// {
//     title:'',
//     subTitle:'',
//     description:"",
//     image:"",
//     pathToGitHub:"",
//     pathToLivePage:"",
// },
// {
//     title:'',
//     subTitle:'',
//     description:"",
//     image:"",
//     pathToGitHub:"",
//     pathToLivePage:"",
// }
