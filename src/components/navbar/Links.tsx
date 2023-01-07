import { Pages } from "../../types.d";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  currentPage: Pages;
  selectedPage: Pages;
  handleSetPage: (value: Pages) => void;
}

const Links = ({ currentPage, selectedPage, handleSetPage }: Props) => {
  return (
    <AnchorLink
      href={`#${selectedPage}`}
      onClick={() => handleSetPage(selectedPage)}
      className={`${
        currentPage === selectedPage ? "font-bold text-primary-500" : ""
      } transition duration-500 `}
    >
      {selectedPage}
    </AnchorLink>
  );
};
export default Links;
