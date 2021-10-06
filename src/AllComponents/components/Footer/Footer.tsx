import React from "react";
import Styles from './Footer.module.css'
import {BlockTitle} from "../../../common/AdditionalComponents/blockTitle/blockTitle";
import fb_logo from '../../../common/assets/footer_logos/fb_logo.png'
import tlgrm_logo from '../../../common/assets/footer_logos/tlgrm_logo.jpg'
import vk_logo from '../../../common/assets/footer_logos/vk_logo.jpg'
import wtsapp_logo from '../../../common/assets/footer_logos/wtsapp_logo.png'


// const footerItems = ['pic1', 'pic2', 'pic3', 'pic4']

const footerLogos = [fb_logo, tlgrm_logo, vk_logo, wtsapp_logo]

export const Footer = () => {

    return(
        <div className={Styles.MainFooterContainer}>
            <div className={Styles.FooterContainer}>
                <BlockTitle uniqTitle={'ooter'} firstSymbol={'F'}/>
                <div className={Styles.FooterItems}>
                    {/*{footerItems.map(picX => <div className={Styles.EachItem}>{picX}</div>)}*/}
                    {footerLogos.map(picX => <img className={Styles.EachItem} src={picX} />)}
                </div>
                <div> &copy; 2021 All rights reserved</div>
            </div>
        </div>
    )
}