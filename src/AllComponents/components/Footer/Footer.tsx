import React from "react";
import Styles from './Footer.module.css'

const footerItems = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7']

export const Footer = () => {

    return(
        <div className={Styles.MainFooterContainer}>
            <div className={Styles.FooterContainer}>
                <h2 className={Styles.HeaderFooter}>FOOTER</h2>
                <div className={Styles.FooterItems}>
                    {footerItems.map(picX => <div className={Styles.EachItem}>{picX}</div>)}
                </div>
                <div> &copy; 2021 All rights reserved</div>
            </div>
        </div>
    )
}