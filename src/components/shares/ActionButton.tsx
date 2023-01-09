import AnchorLink from "react-anchor-link-smooth-scroll";
import { Pages } from "../../types.d";

interface Props {
  children: React.ReactNode;
  handleSetPage: (value: Pages) => void;
}

const ActionButton = ({ children, handleSetPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-myBlack px-8 py-2 text-myWhite hover:bg-myPurple hover:text-myWhite"
      onClick={() => handleSetPage(Pages.Contact)}
      href={`#${Pages.Contact}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
