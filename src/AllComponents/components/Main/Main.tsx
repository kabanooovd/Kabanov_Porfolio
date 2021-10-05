import React from "react";
import Styles from './Main.module.css'
import ContainerStyle from '../../../common/styles/container.module.css'
import {SelfPrintingString} from "../../../common/AdditionalComponents/SelfPrintingString/SelfPrintingString";


export const Main = () => {

    const IntroductionName = 'Im DMITRIY...'

    return (
        <div className={Styles.mainBlock}>
            <div className={ContainerStyle.Container}>
                <div className={Styles.greetings}>
                    <span>Hi there</span>
                    <h1><SelfPrintingString word={IntroductionName} seconds={0.1}/></h1>
                    <p>Front-end developer</p>
                </div>
                <div className={Styles.photo}/>
            </div>
        </div>
    )
}




