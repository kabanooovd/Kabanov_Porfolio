import React from "react";
import Styles from './Skills.module.css'
import ContainerStyle from '../../../common/styles/container.module.css'
import {SingleSkill} from "./SingleSkill/SingleSkill";

const mySkills = [
    {skillTitle: 'JS', skillDescription: 'I have to type some long text to get some space and the to make a style for all my skills because I have to make a beautiful portfolio to impress HR. I believe that they really care of it'},
    {skillTitle: 'TS', skillDescription: 'I have to type some long text to get some space and the to make a style for all my skills because I have to make a beautiful portfolio to impress HR. I believe that they really care of it'},
    {skillTitle: 'React', skillDescription: 'I have to type some long text to get some space and the to make a style for all my skills because I have to make a beautiful portfolio to impress HR. I believe that they really care of it'},
]

export const Skills = () => {

    const skills = mySkills.map( (skill, index) => <SingleSkill key={index} title={skill.skillTitle} description={skill.skillDescription}/>)

    return(
        <div className={Styles.SkillsBlockStyles}>
            <div className={`${ContainerStyle.Container} ${Styles.skillsContainer}`}>
                <div><h2 className={Styles.title}>Skills</h2></div>
                <div className={Styles.skills}>
                    {skills}
                </div>
            </div>
        </div>
    )
}




