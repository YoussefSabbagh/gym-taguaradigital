export interface Sub {
  nick: string;
  subMonth: number;
  avatar: string;
  description?: string;
}

export enum Pages {
  Home = "inicio",
  Benefits = "beneficios",
  Classes = "clases",
  About = "nosotros",
  Contact = "contacto",
}

export interface BenefitType {
  buttonText: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
