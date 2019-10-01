import React from "react";
import '../../../CSS/index.css'


export const OperatorButton = (props) => {
  return (
    <div className="operator-button" label={props.char} value={props.value} key={props.key}>{props.char}</div>
  );
};
