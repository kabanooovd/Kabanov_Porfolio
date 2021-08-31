import React from "react";
import Styles from './Header.module.css'
import {Nav} from "./nav/Nav";

export const Header = () => {
    return(
        <div className={Styles.HeaderStyles}>
            <Nav />
        </div>
    )
}




