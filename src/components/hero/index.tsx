import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Pages } from "../../types.d";
import ActionButton from "../shares/ActionButton";
import HomePageText from "../../assets/image/pictures/HomePageText.png";
import HomePageGraphic from "../../assets/image/pictures/hero0.png";

interface Props {
  handleSetPage: (value: Pages) => void;
}

const Hero = ({ handleSetPage }: Props) => {
  return (
    <section id={Pages.Home} className="gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => handleSetPage(Pages.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-tdfitness">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="tooltip mt-8 text-sm">
              <span className="tooltiptext">
                <span className="text-xl">Taguara Digital</span> te desarrolla
                tu pagina web a la medida para tu Gym. Esta es un modelo para
                que veas lo que podemos hacer por ti.
              </span>
              Unparalleled Training Fitness Classes. World Class Studios to get
              the Body Shapes That you Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton handleSetPage={handleSetPage}>??nete ya</ActionButton>
            <AnchorLink
              className="text-sm font-bold text-myBlack underline hover:text-myPurple"
              onClick={() => handleSetPage(Pages.Contact)}
              href={`#${Pages.Contact}`}
            >
              <p>Mas Informaci??n</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="relative z-10 flex basis-3/5 justify-center
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <div className="hidden before:absolute before:top-0 before:left-0 before:content-sparkles md:block "></div>
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
