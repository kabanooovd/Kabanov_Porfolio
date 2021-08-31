import React from "react";
import Styles from './Nav.module.css'

// a[href=""]*5

export const Nav = () => {
    return(
        <div className={Styles.NavStyles}>
            <a href="">General</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    )
}




