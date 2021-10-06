import React from "react";
import Styles from './Skills.module.css'
import ContainerStyle from '../../../common/styles/container.module.css'
import {SingleSkill} from "./SingleSkill/SingleSkill";
import {BlockTitle} from "../../../common/AdditionalComponents/blockTitle/blockTitle";
import jsIcon from '../../../common/skillsImg/js_icon.png'
import tsIcon from '../../../common/skillsImg/ts_icon.png'
import reactIcon from '../../../common/skillsImg/react_icon.png'
import reduxIcon from '../../../common/skillsImg/redux_icon.png'
import htmlIcon from '../../../common/skillsImg/html_icon.png'
import cssIcon from '../../../common/skillsImg/css_icon.png'

const mySkills = [
    {
        skillTitle: 'HTML',
        skillDescription: 'It is a hyper text metrical language, which allows to place elements in correct places',
        iconImg: htmlIcon,
    },
    {
        skillTitle: 'CSS',
        skillDescription: 'It is a tool which purpose to add styles for html elements',
        iconImg: cssIcon,
    },
    {
        skillTitle: 'Java Script',
        skillDescription: 'JS is my base skill in web development. Its allow to develop applications of different difficulties and it is very flex and expandable. Also I like to spend time by solving tasks on code wars using JS',
        iconImg: jsIcon,
    },
    {
        skillTitle: 'Type Script',
        skillDescription: 'TS it is typed JS, very useful instrument in development applications. The ide works with TS and helps to avoid not expected results while development',
        iconImg: tsIcon,
    },
    {
        skillTitle: 'React',
        skillDescription: 'React is a library for purposed to develop SPA, it is a modern tool which using virtual DOM',
        iconImg: reactIcon,
    },
    {
        skillTitle: 'Redux',
        skillDescription: 'Redux is a state management system. Its includes libs as react-redux, redux-thunk, redux-toolKit etc... ',
        iconImg: reduxIcon,
    },
]

export const Skills = () => {

    const skills = mySkills.map( (skill, index) => <SingleSkill
        key={index}
        title={skill.skillTitle}
        description={skill.skillDescription}
        icon={skill.iconImg}
    />)

    return(
        <div className={Styles.SkillsBlockStyles}>
            <div className={`${ContainerStyle.Container} ${Styles.skillsContainer}`}>
                    <BlockTitle uniqTitle={'kills'} firstSymbol={'S'}/>
                <div className={Styles.skills}>
                    {skills}
                </div>
            </div>
        </div>
    )
}




