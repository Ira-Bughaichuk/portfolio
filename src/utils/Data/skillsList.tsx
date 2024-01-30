// import { SkillsList } from "../types";

// export const skillsList1: SkillsList = {
//   tech: [
//     "HTML5 / CSS3 /   SASS",
//     "JavaScript, ES6+",
//     "React",
//     "Redux/Redux Toolkit",
//     "REST API",
//     "TypeScript",
//     "Next.js",
//     "Firebase",
//     "TailwindCss",
//     "Git, GitHub",
//   ],
//   soft: [
//     "Communicative",
//     "Persistence",
//     "Ability to work well both individually and in a team",
//   ],
// };


export type SkillsList = {
    tech: Skill[];
    soft: Skill[];
  };
export type Skill = { title: string; currentClass: string };

export const skillsList:SkillsList = {
    tech: [{ title: "HTML5 / CSS3 /   SASS", currentClass: "cart_skill1" },
    { title: "JavaScript, ES6+", currentClass: "cart_skill2" },
    { title: "React", currentClass: "cart_skill3" },
    { title: "Redux/Redux Toolkit", currentClass: "cart_skill4" },
    { title: "REST API", currentClass: "cart_skill5" },
    { title: "TypeScript", currentClass: "cart_skill6" },
    { title: "Next.js", currentClass: "cart_skill7" },
    { title: "Firebase", currentClass: "cart_skill8" },
    { title: "TailwindCss", currentClass: "cart_skill9" },
    { title: "Git, GitHub", currentClass: "cart_skill10" },],
    soft: [
        { title: "Communicative", currentClass: "cart_soft1" },
   { title: "Persistence", currentClass: "cart_soft2" },
   { title: "Ability to work well both individually and in a team", currentClass: "cart_soft3" },
    ]
}


// [
//   { title: "HTML5 / CSS3 /   SASS", currentClass: "" },
//   { title: "JavaScript, ES6+", currentClass: "" },
//   { title: "React", currentClass: "" },
//   { title: "Redux/Redux Toolkit", currentClass: "" },
//   { title: "REST API", currentClass: "" },
//   { title: "TypeScript", currentClass: "" },
//   { title: "Next.js", currentClass: "" },
//   { title: "Firebase", currentClass: "" },
//   { title: "TailwindCss", currentClass: "" },
//   { title: "Git, GitHub", currentClass: "" },
//   { title: "Communicative", currentClass: "" },
//   { title: "Persistence", currentClass: "" },
//   { title: "Ability to work well both individually and in a team", currentClass: "" },
// ];
