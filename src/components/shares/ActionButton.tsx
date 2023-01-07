import AnchorLink from "react-anchor-link-smooth-scroll";
import { Pages } from "../../types.d";

interface Props {
  children: React.ReactNode;
  handleSetPage: (value: Pages) => void;
}

const ActionButton = ({ children, handleSetPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-8 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => handleSetPage(Pages.Contact)}
      href={`#${Pages.Contact}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
