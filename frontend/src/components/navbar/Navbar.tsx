import React from "react";
import '../../App.css'
import { NavItem } from "./NavItem";
import { 
    mdiMailboxOpenOutline,
    mdiCogOutline,
    mdiApplicationOutline,
    mdiClose
 } from '@mdi/js';

interface Props {
}

export const Navbar: React.FC<Props> = () => {

    return (
        <div className="Nav">
            <button id="close-nav-button" className="NavItem">
                <NavItem id="closeButton" 
                icon={mdiClose}/></button>
            <NavItem id="projects" 
                text="Projects" 
                icon={mdiApplicationOutline}/>
            <NavItem id="inbox" 
                text="Inbox" 
                icon={mdiMailboxOpenOutline}/>
            <NavItem id="settings"
                text="Settings" 
                icon={mdiCogOutline} />
        </div>
    );
};