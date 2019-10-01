import React from 'react';
import '../../CSS/index.css';

import Logo from "../DisplayComponents/Logo.js";

import { Display } from '../DisplayComponents/Display.js'
import { Specials } from '../ButtonComponents/SpecialButtons/Specials.js';
import { Numbers } from '../ButtonComponents/NumberButtons/Numbers.js';
import { Operators } from '../ButtonComponents/OperatorButtons/Operators.js'


export default function CalculatorUI () {
    return (
        <div className="container">
            <Logo />
            <Display />

            <div className="buttons-container">
                <div className="left-panel">
                    <Specials />
                    <Numbers />
                </div>
                <div className="right-panel">
                    <Operators />
                </div>
            </div>
            

            
        </div>
    )
    
}