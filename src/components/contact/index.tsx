import { Pages } from "../../types.d";

interface Props {
  currentPage: string;
}

const Contact = ({ currentPage }: Props) => {
  return (
    <div
      id={Pages.Contact}
      className="flexB h-screen flex-col bg-blue-300 pt-24"
    >
      Contact
    </div>
  );
};
export default Contact;
