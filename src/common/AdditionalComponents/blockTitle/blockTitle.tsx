import React from "react";
import s from './blockTitle.module.css'

export const BlockTitle = ({uniqTitle} : {uniqTitle : string}) => {

    return (
        <div className={s.BlockTitle}>
            <h2>
                {uniqTitle}
            </h2>
        </div>
    )
}







