import React, { useState } from "react";
import '../../App.css'
import { NavItem } from "./NavItem";
import { 
    mdiMailboxOpenOutline,
    mdiCogOutline,
    mdiApplicationOutline,
    mdiClose,
    mdiMenu
 } from '@mdi/js';

interface Props {
    
}

export const Navbar: React.FC<Props> = () => {
    const [mount, setMount] = useState(true);

    return (
        <div className="Nav">
            <button 
                id="close-nav-button" 
                className="NavItem"
                onClick={() => setMount(!mount)}>
                    <NavItem id="closeButton" 
                        icon={mount ? mdiClose : mdiMenu} 
                        mount = {mount}/>
                </button>
            <NavItem id="projects" 
                text="Projects"
                icon={mdiApplicationOutline}
                mount = {mount}/>
            <NavItem id="inbox" 
                text="Inbox" 
                icon={mdiMailboxOpenOutline}
                mount = {mount}/>
            <NavItem id="settings"
                text="Settings"
                icon={mdiCogOutline}
                mount = {mount}/>
        </div>
    );
};