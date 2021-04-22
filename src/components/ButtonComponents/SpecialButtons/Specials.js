import React from "react";
import { specials } from "../../../data.js"

import { SpecialButton } from './SpecialButton.js'
//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div className="specials-container">
      {specials.map((specialButton, index) => {
        return(
          <SpecialButton label={specialButton} key={index} />
        )
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
