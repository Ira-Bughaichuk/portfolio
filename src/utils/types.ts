export type Data = {
  projects: ProjectCart[],
  total: number,
}
export type ProjectCart = {
  _id: string;
  projectTitle: string;
  mainTechnology:string;
  projectLink: string;
  technologyTitle: string;
  smallDescription: string;
  category:string;
  titleImage: string;  // 
  tag: string[];
  gitURL: string;
  projectURL:string
}
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
export type ICartProjectsProps = {
  item:{
    projectTitle: string;
    mainTechnology:string;
    projectLink: string;
    technologyTitle: string;
    smallDescription: string;
    category:string;
    titleImage: string; // maybe SanityImageSource
    tag: string[];
    gitURL:string;
    projectURL:string;
  }
}
export type IBtnPrimaryProps ={
  title:string;
  typeBtn: 'submit' | 'button';
  onClick: ()=> void;
  children: React.ReactNode;
}
export type IBtnProjectProps = {
  tag:string; 
  onClick: (value:string) =>void; 
  isSelected:boolean; 
}
export type IBtnToPageProps = {
   path: string; 
   title: string; 
   children:React.ReactNode; 
};
export type IButtonNavProps = {
  handlerToggle: () => void;
  open: boolean;
};
export type IButtonsProps = {
  title: string;
  path: string;
  children: React.ReactNode;
}
export type IMenuOverlayProps = {
  open:boolean;
  handlerToggle: () => void;
};
export type IProjectListProps = {
  projectList: ProjectCart[],
};
export type IProjectSliderProps ={
  framework: string;
  title: string;
  path: string;
  subTitle: string;
};