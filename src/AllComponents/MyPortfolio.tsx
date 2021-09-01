import React from "react";
import {Header} from './components/Header/Header'
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Propjects/Projects";
import {HireBlock} from "./components/HireBlock/HireBlock";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

export const MyPortfolio = () => {

    return (
        <div>
            <Header         />
            <Main           />
            <Skills         />
            <Projects       />
            <HireBlock      />
            <Contacts       />
            <Footer         />
        </div>
    )
}


