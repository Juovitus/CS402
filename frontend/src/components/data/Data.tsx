import React from "react";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Navbar } from '../navbar/Navbar'

interface Props {

}

export const Data: React.FC<Props> = () => {
    return(
        <div className="Data">
            <Navbar />
            <Main />
            <Header />
        </div>
    );
};