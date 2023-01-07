import { Pages } from "../../types.d";

interface Props {
  currentPage: string;
}

const Beneficios = ({ currentPage }: Props) => {
  return (
    <div
      id={Pages.Beneficts}
      className="flexB h-screen flex-col bg-amber-300  pt-24 "
    >
      Beneficios
    </div>
  );
};
export default Beneficios;
