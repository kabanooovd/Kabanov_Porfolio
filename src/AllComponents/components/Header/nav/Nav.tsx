import React from "react";
import Styles from './Nav.module.css'

// a[href=""]*5

export const Nav = () => {
    return(
        <div className={Styles.NavStyles}>
            <a href="" className={Styles.linkStyle}>General</a>
            <a href="" className={Styles.linkStyle}>Skills</a>
            <a href="" className={Styles.linkStyle}>Projects</a>
            <a href="" className={Styles.linkStyle}>Contacts</a>
        </div>
    )
}




