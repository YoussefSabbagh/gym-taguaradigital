import { Pages } from "../../types.d";

interface Props {
  currentPage: string;
}

const Classes = ({ currentPage }: Props) => {
  return (
    <div
      id={Pages.Classes}
      className="flexB h-screen flex-col bg-green-300  pt-24 "
    >
      Clases
    </div>
  );
};
export default Classes;
