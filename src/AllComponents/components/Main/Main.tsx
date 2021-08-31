import React from "react";
import Styles from './Main.module.css'
import ContainerStyle from '../../../common/styles/container.module.css'


export const Main = () => {
    return(
        <div className={Styles.mainBlock}>
            <div className={ContainerStyle.Container}>
                <div className={Styles.greetings}>
                    <span>Hi there</span>
                    <h1>Im DMITRIY</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={Styles.photo}>Place for pic</div>
            </div>

        </div>
    )
}




