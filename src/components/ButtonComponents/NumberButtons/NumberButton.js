import React from "react";
import '../../../CSS/index.css'

export default function NumberButton (props) {
  if(props.label === "0") {
    return(
      <div className="zero-button" label={props.label} key={props.key}>{props.label}</div>
    )
    
  }
  return (
      // {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      <div className="number-button" label={props.label} key={props.key}>{props.label}</div>
      
  );
};
