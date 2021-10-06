import React from "react";
import s from './blockTitle.module.css'

export const BlockTitle = ({
    uniqTitle,
    firstSymbol,
} : {
    uniqTitle : string,
    firstSymbol: string,
}) => {

    // const text = `${firstSymbol}${uniqTitle}`

    return (
        <div className={s.BlockTitle}>
            <h2 style={{'color': '#ff6600'}}>
                {firstSymbol}
            </h2>
            <h2>
                {uniqTitle}
            </h2>
        </div>
    )
}







