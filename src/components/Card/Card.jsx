// src/components/Card/Card.jsx
import React from "react";
import "./Card.css";

const Card = ({ header, children, footer, className = "", ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
