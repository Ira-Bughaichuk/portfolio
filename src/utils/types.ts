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
