import { motion } from "framer-motion";
import { Pages } from "../../types.d";
import TitleText from "../shares/TitleText";

import AboutPageGraphic1 from "../../assets/image/pictures/about1.png";
import AboutPageGraphic2 from "../../assets/image/pictures/about2.png";

interface Props {
  handleSetPage: (value: Pages) => void;
}

const About = ({ handleSetPage }: Props) => {
  return (
    <section id={Pages.About} className="relative min-h-full w-full  py-20">
      <div className="relative mx-auto w-5/6">
        <motion.div
          className=" pb-32 md:mt-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <TitleText>Acerca de Nosotros</TitleText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 hidden h-full w-4/5 rounded-tr-[200px] bg-myYellow-100 md:block"></div>
        <div className="relative mx-auto grid w-5/6 grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative h-full">
            <div className="relative">
              <img
                className="mb-8  -mt-20 object-cover "
                alt="benefits-page-graphic"
                src={AboutPageGraphic1}
              />
              <div>
                <p className="mb-4">
                  Wise busy past both park when an ye no. Nay likely her length
                  sooner thrown sex lively income. The expense windows adapted
                  sir. Wrong widen drawn ample eat off doors money. Offending
                  belonging promotion provision an be oh consulted ourselves it.
                  Blessing welcomed ladyship she met humoured sir breeding her.
                  Six curiosity day assurance bed necessary.
                </p>
                <p className="mb-4">
                  And produce say the ten moments parties. Simple innate summer
                  fat appear basket his desire joy. Outward clothes promise at
                  gravity do excited. Sufficient particular impossible by
                  reasonable oh expression is. Yet preference connection
                  unpleasant yet melancholy but end appearance. And excellence
                  partiality estimating terminated day everything.
                </p>
                <p className="mb-4">
                  Warmly little before cousin sussex entire men set. Blessing it
                  ladyship on sensible judgment settling outweigh. Worse linen
                  an of civil jokes leave offer. Parties all clothes removal
                  cheered calling prudent her. And residence for met the
                  estimable disposing. Mean if he they been no hold mr. Is at
                  much do made took held help. Latter person am secure of estate
                  genius at.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-full">
            <div className="relative mt-20 w-full md:w-2/3">
              <TitleText>¿Que hacemos ?</TitleText>
              <p className="mt-5 mb-10 text-sm">
                We are distinguished by our unsurpassed motivating atmosphere,
                knowledgeable staff, and premier exercise equipment, which
                supports our members in meeting their individual fitness goals.
              </p>
            </div>
            <img
              className="wobject-cover "
              alt="benefits-page-graphic"
              src={AboutPageGraphic2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
