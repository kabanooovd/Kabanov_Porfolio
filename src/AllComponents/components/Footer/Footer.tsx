import React from "react";
import Styles from './Footer.module.css'
import {BlockTitle} from "../../../common/AdditionalComponents/blockTitle/blockTitle";

const footerItems = ['pic1', 'pic2', 'pic3', 'pic4']

export const Footer = () => {

    return(
        <div className={Styles.MainFooterContainer}>
            <div className={Styles.FooterContainer}>
                <BlockTitle uniqTitle={'footer'}/>
                <div className={Styles.FooterItems}>
                    {footerItems.map(picX => <div className={Styles.EachItem}>{picX}</div>)}
                </div>
                <div> &copy; 2021 All rights reserved</div>
            </div>
        </div>
    )
}