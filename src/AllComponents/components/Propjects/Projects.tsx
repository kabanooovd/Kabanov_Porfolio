import React from "react";
import Styles from "./Projects.module.css"
import ContainerStyle from "../../../common/styles/container.module.css";
import TDL_pic from '../../../common/assets/images/TDL_pic.jpg'
import dimasSNW from '../../../common/assets/images/dimasSNW.jpg'
import {SingleProject} from "./SingleProject/SingleProject";
import {BlockTitle} from "../../../common/AdditionalComponents/blockTitle/blockTitle";

const currentProjects = [
    {
        ProjectName: 'TodoList',
        ProjectDescription: 'The "Todo list" allow to add, remove, edit and sort your tasks in accordance with settings and to create as much lists as user needs',
        ProjectPic: TDL_pic,      // typeof (TDL_pic) => string
        link: 'https://github.com/kabanooovd/My_Todo_List'
    },
    {
        ProjectName: 'Social-netWork',
        ProjectDescription: 'The "Social-netWork" consist all traditional development methods, including class components',
        ProjectPic: dimasSNW,      // typeof (dimasSMW) => string
        link: 'https://github.com/kabanooovd/Social_Network'
    },
]

export const Projects = () => {

    const myProjects = currentProjects.map((project, index) => <SingleProject key={index}
                                                                ProjectName={project.ProjectName}
                                                                ProjectDescription={project.ProjectDescription}
                                                                ProjectPic={project.ProjectPic}
                                                                link={project.link}
    />)



    return(
        <div className={Styles.ProjectsMainBlockStyle}>
            <div className={`${ContainerStyle.Container} ${Styles.projectsContainer}`}>
                <BlockTitle uniqTitle={'rojects'} firstSymbol={'P'}/>
                <div className={Styles.Projects}>
                    {myProjects}
                </div>
            </div>
        </div>
    )
}