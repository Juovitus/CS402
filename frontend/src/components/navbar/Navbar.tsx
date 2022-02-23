import React from "react";
import '../../App.css'
import { NavItem } from "./NavItem";

interface Props {
}

export const Navbar: React.FC<Props> = () => {

    return (
        <div className="Nav">
            <h1>309</h1>
            <NavItem text="Projects"/>
            <NavItem text="Inbox" />
            <NavItem text="Settings" />
        </div>
    );
};