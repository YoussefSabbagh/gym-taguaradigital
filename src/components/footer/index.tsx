import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Pages } from "../../types.d";
import Logo from "../../assets/image/logos/td-trans.png";

const Footer = () => {
  return (
    <footer className="m-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 ">
        <div className="w-[100px] text-left">
          <AnchorLink href={`#${Pages.Home}`}>
            <img src={Logo} alt="Logo" />
          </AnchorLink>
        </div>

        <div className="flex flex-col gap-1 text-sm ">
          <h2 className="text-xl ">Links</h2>
          <span className="">Preguntas Frecuentes</span>
          <span className="">Términos y condiciones</span>
        </div>

        <div className="flexB basis-1/3 flex-col justify-center gap-4 text-4xl">
          <h2>Siguenos </h2>
          <div className="flexB w-full justify-center space-x-4 text-primary-500 ">
            <a
              className="text-primary-500 hover:scale-95 hover:text-secondary-500"
              href="https://www.linkedin.com/in/youssef-sabbagh/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-primary-500 hover:scale-95 hover:text-secondary-500"
              href="https://github.com/YoussefSabbagh"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="text-primary-500 hover:scale-95 hover:text-secondary-500"
              href="https://twitter.com/TaguaraDigital"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center font-title text-xs">
        Taguara Digital © Copyright 2023. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
