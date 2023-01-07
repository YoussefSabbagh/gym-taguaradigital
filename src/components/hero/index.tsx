import { Pages } from "../../types.d";

interface Props {
  currentPage: string;
}

const Hero = ({ currentPage }: Props) => {
  return (
    <section
      id={Pages.Home}
      className="flexB h-screen flex-col bg-red-200 pt-24 "
    >
      <h1 className="h-screen font-title text-4xl">Gym Taguara Digital</h1>
    </section>
  );
};
export default Hero;
