import React from "react";
import Styles from './HireBlock.module.css'
import ContainerStyle from "../../../common/styles/container.module.css";
import {BlockTitle} from "../../../common/AdditionalComponents/blockTitle/blockTitle";
import {LocalSuperButton} from "../../../common/AdditionalComponents/LocalSuperButton/LocalSuperButton";

export const HireBlock = () => {

    return(
        <div className={Styles.MainHireBlockStyles}>
            <div className={`${ContainerStyle.Container} ${Styles.HireBlockStyle}`}>
                {/*<h2 className={Styles.HireBlockHeader}>OPENED TO OFFERS FOR A REMOTE WORK</h2>*/}
                    <BlockTitle uniqTitle={'PENED TO OFFERS FOR A REMOTE WORK'} firstSymbol={'O'}/>
                {/*Это кноооопка*/}
                <div>
                    <LocalSuperButton buttonTitle={'HIRE ME'}/>
                </div>
            </div>
        </div>
    )
}




