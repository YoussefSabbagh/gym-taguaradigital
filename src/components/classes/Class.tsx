interface Props {
  name: string;
  description?: string;
  image: string;
}

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  h-[calc(100%-15px)] w-full flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-sm text-white
  opacity-0 transition duration-500 hover:opacity-90 font-title`;

  return (
    <li className="relative mx-2 inline-block h-[280px] w-[350px]">
      <div className={overlayStyles}>
        <p className="text-xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img
        alt={`${image}`}
        src={image}
        className="w-full object-cover object-center"
      />
    </li>
  );
};

export default Class;
