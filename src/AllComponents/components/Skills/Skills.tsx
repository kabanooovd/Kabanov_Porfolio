import React from "react";
import Styles from './Skills.module.css'
import ContainerStyle from '../../../common/styles/container.module.css'
import {SingleSkill} from "./SingleSkill/SingleSkill";
import {BlockTitle} from "../../../common/AdditionalComponents/blockTitle/blockTitle";

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
                    <BlockTitle uniqTitle={'skills'}/>
                <div className={Styles.skills}>
                    {skills}
                </div>
            </div>
        </div>
    )
}




