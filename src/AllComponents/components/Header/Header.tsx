import React from "react";
import Styles from './Header.module.css'
import {Nav} from "./nav/Nav";
// import {SelfPrintingString} from "../../../common/AdditionalComponents/SelfPrintingString/SelfPrintingString";

export const Header = () => {
    return(
        <div className={Styles.HeaderStyles}>
            <div className={Styles.greetingSentence}>
                {/*<SelfPrintingString word={'lalalalala'} seconds={0.5} />*/}
                <h1><span className={Styles.firstSignsStyle}>You</span> are Welcomed to my PORTFOLIO</h1>
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}




