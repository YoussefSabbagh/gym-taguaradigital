import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/image/logos/td-trans.png";
import Link from "./Links";
import { Pages } from "../../types.d";
import ActionButton from "../shares/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  currentPage: Pages;
  handleSetPage: (value: Pages) => void;
}
const Navbar = ({ currentPage, handleSetPage }: Props) => {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="flexB fixed top-0 z-10 h-[80px] w-full bg-primary-100 py-0 px-8 md:px-20 ">
      <div className="flexB w-full">
        <div className="w-[80px]">
          <AnchorLink href={`#${Pages.Home}`}>
            <img src={Logo} alt="Logo" />
          </AnchorLink>
        </div>
        <div className="flexB mr-4 space-x-4 md:mr-0">
          <nav className="flexB mr-0 md:mr-8">
            <ul
              className={`flexB mobileMenu md:desktopMenu list-none justify-center text-center uppercase duration-300 ease-in-out md:justify-between ${
                showMobileMenu ? "left-0 opacity-100" : "md:left-0"
              }`}
            >
              <li
                className="mt-8 text-center text-3xl md:mt-0 md:text-base "
                onClick={handleShowToggleMenu}
              >
                <Link
                  selectedPage={Pages.Home}
                  currentPage={currentPage}
                  handleSetPage={handleSetPage}
                />
              </li>

              <li
                className="mt-8 text-center text-3xl md:mt-0 md:text-base "
                onClick={handleShowToggleMenu}
              >
                <Link
                  selectedPage={Pages.Beneficts}
                  currentPage={currentPage}
                  handleSetPage={handleSetPage}
                />
              </li>

              <li
                className="mt-8 text-center text-3xl md:mt-0 md:text-base "
                onClick={handleShowToggleMenu}
              >
                <Link
                  selectedPage={Pages.Classes}
                  currentPage={currentPage}
                  handleSetPage={handleSetPage}
                />
              </li>

              <li
                className="mt-8 text-center text-3xl md:mt-0 md:text-base "
                onClick={handleShowToggleMenu}
              >
                <Link
                  selectedPage={Pages.About}
                  currentPage={currentPage}
                  handleSetPage={handleSetPage}
                />
              </li>

              <li
                className="mt-8 text-center text-3xl md:mt-0 md:text-base "
                onClick={handleShowToggleMenu}
              >
                <Link
                  selectedPage={Pages.Contact}
                  currentPage={currentPage}
                  handleSetPage={handleSetPage}
                />
              </li>
            </ul>
          </nav>

          <div className="md:flexB">
            <ActionButton handleSetPage={handleSetPage}>
              Únete ahora
            </ActionButton>
          </div>
        </div>
      </div>

      <div className="flexB">
        <div
          className="cursor-pointer rounded-full bg-secondary-500 p-2 transition duration-500 hover:bg-primary-500 hover:text-white  md:hidden"
          onClick={handleShowToggleMenu}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
