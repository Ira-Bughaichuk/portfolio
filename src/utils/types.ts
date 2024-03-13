export type ProjectCart = {
  _id: string;
  projectTitle: string;
  mainTechnology:string;
  projectLink: string;
  technologyTitle: string;
  smallDescription: string;
  category:string;
  titleImage: any; 
  tag: string[];
  gitURL: string;
  projectURL:string
}
export type NavLink = {
  title: string;
  path: string;
 
};
export type SkillsList = {
  tech: Skill[];
  soft: Skill[];
};
export type Skill = {
  title: string;
  currentClass: string;
};

export type EducationCart = {
  university: string;
  profession: string;
  data: string;
  path: string;
};
export type Languages = {
  languages: string;
  level: string;
  path: string;
};
export type Project = {
  id:number;
  framework: string;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  pathToGitHub: string;
  pathToLivePage: string;
  tag: string[];
};
export type Offer = {
  currentClass: string;
  title: string;
  description: string;
};
//props

export type INavLinkProps = {
  title: string;
  path: string;
  handlerToggle? : ()=>void;
};
export type ITitleProps = {
  type: string;
  title: string;
};

export type ICartEducationProps = {
  university: string;
  profession: string;
  data: string;
  path: string;
};

export type ILanguagesCartProps = {
  languages: string;
  level: string;
};
export type IOfferProps = {
  index: number;
  title: string;
  description: string;
};
export type ICartSkillProps = {
  title:string,
  index: number,
}
