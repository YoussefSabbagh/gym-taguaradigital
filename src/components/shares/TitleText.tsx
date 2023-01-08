import React from "react";

interface Props {
  children: React.ReactNode;
}

const TitleText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-title text-3xl font-bold">{children}</h1>
  );
};

export default TitleText;
