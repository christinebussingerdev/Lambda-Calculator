import React from "react";
import '../../../CSS/index.css'

export const SpecialButton = (props) => {
  return (
    <div className="special-button" label={props.label} key={props.key}>{props.label}</div>
  );
};
