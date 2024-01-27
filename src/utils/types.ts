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

