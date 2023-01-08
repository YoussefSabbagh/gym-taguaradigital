import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Pages } from "../../types.d";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  buttonText: string;
  handleSetPage: (value: Pages) => void;
}

const Benefit = ({
  icon,
  title,
  description,
  buttonText,
  handleSetPage,
}: Props) => {
  return (
    <motion.article
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold">{title}</h3>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => handleSetPage(Pages.Contact)}
        href={`#${Pages.Contact}`}
      >
        <p>{buttonText}</p>
      </AnchorLink>
    </motion.article>
  );
};

export default Benefit;
