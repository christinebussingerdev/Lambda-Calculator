import React, {useState} from "react";
import '../../CSS/index.css'
export const Display = () => {

  const currentNumber = useState(0);
    return <div className="display">{currentNumber}</div>;
};
