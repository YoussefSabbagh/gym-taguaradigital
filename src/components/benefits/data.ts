import { BenefitType } from "../../types.d";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

export const benefitsData: Array<BenefitType> = [
  {
    buttonText: "Mas Información",
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    icon: <HomeModernIcon className="h-6 w-6" />,
  },
  {
    buttonText: "Mas Información",
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    icon: <UserGroupIcon className="h-6 w-6" />,
  },
  {
    buttonText: "Mas Información",
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    icon: <AcademicCapIcon className="h-6 w-6" />,
  },
];
