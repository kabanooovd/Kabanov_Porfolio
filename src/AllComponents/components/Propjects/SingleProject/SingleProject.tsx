import React from "react";
import Styles from './SingleProject.module.css'

export const SingleProject = (props: {
    ProjectName: string
    ProjectDescription: string
    ProjectPic: string
    link: string

}) => {

    const {
        ProjectName,
        ProjectDescription,
        ProjectPic,
        link,
    } = props

    return(
        <div className={Styles.eachProject}>
            <div style={ {backgroundImage: `url(${ProjectPic})`} } className={Styles.imgContainer}>
                <a href={link} className={Styles.viewBtn}>VIEW PROJECT</a>
            </div>
            <h4 className={Styles.ProjectNameStyle}>{ProjectName}</h4>
            <p className={Styles.ProjectDescriptionStyle}>{ProjectDescription}</p>
        </div>
    )
}






