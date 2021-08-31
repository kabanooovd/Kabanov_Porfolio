import React from "react";
import {Header} from './components/Header/Header'
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Propjects/Projects";

export const MyPortfolio = () => {

    return (
        <div>
            <Header />
            <Main />
            <Skills />
            <Projects />
        </div>
    )
}


