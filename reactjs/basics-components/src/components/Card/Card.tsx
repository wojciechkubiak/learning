import React, { ReactNode } from "react";

import "./Card.css";

interface ICard {
  className: String;
  children: ReactNode;
}

const Card = ({ className, children }: ICard) => {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
};

export default Card;
