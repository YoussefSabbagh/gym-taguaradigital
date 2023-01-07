export interface Sub {
  nick: string;
  subMonth: number;
  avatar: string;
  description?: string;
}

export enum Pages {
  Home = "inicio",
  Beneficts = "beneficios",
  Classes = "clases",
  About = "nosotros",
  Contact = "contacto",
}
