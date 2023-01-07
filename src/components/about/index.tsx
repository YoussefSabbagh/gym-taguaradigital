import { Pages } from "../../types.d";

interface Props {
  currentPage: string;
}

const About = ({ currentPage }: Props) => {
  return (
    <div id={Pages.About} className="flexB h-screen flex-col bg-red-200 pt-24 ">
      About
    </div>
  );
};
export default About;
