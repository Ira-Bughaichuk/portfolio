export type NavLink = {
  title: string;
  path: string;
};
export type SkillsList = {
  tech: string[];
  soft: string[];
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
  title: string;
  subTitle: string;
  description: string;
  image: string;
  pathToGitHub: string;
  pathToLivePage: string;
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
};
export type ITitleProps = {
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
