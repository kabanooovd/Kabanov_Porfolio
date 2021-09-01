import React from "react";
import Styles from './HireBlock.module.css'
import ContainerStyle from "../../../common/styles/container.module.css";

export const HireBlock = () => {

    return(
        <div className={Styles.MainHireBlockStyles}>
            <div className={`${ContainerStyle.Container} ${Styles.HireBlockStyle}`}>
                <h2 className={Styles.HireBlockHeader}>OPENED TO OFFERS FOR A REMOTE WORK</h2>
                <div className={Styles.HireBtn}><b>HIRE ME</b></div>
            </div>
        </div>
    )
}




