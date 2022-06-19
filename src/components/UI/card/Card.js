import React from 'react';
import cl from "./Card.module.scss";

const Card = ({children}) => {
  return (
    <div className={cl.card}>
      {children}
    </div>
  );
};

export default Card;