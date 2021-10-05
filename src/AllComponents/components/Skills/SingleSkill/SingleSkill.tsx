import React from "react";
import Style from './SingleSkill.module.css'

export const SingleSkill = (props: {
    title: string,
    description: string
    icon: string
}) => {
    const {
        title,
        description,
    } = props

    return(
        <div className={Style.skill}>
            <div className={Style.icon}>
                <img src={props.icon} alt=""/>
            </div>
            <h3 className={Style.title}>{title}</h3>
            <span className={Style.description}>{description}</span>
        </div>
    )
}