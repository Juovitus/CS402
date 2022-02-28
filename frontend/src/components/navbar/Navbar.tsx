import React, { useState } from "react";
import '../../App.css'
import { NavItem } from "./NavItem";
import { NavLink } from "react-router-dom";
import { 
    mdiMailboxOpenOutline,
    mdiCogOutline,
    mdiApplicationOutline,
    mdiClose,
    mdiMenu,
    mdiBookOpenOutline
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

            <NavLink to='/' 
                className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
                <NavItem id="projects" 
                    text="Projects"
                    icon={mdiApplicationOutline}
                    mount = {mount}/>
            </NavLink>

            <NavLink to='/inbox' 
                className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
                <NavItem id="inbox" 
                    text="Inbox" 
                    icon={mdiMailboxOpenOutline}
                    mount = {mount}/>
            </NavLink>

            <NavLink to='/data' 
                className={({isActive}) => isActive ? 'nav-link-active' : 'nav-link'}>
                <NavItem id="data"
                    text="Data"
                    icon={mdiBookOpenOutline}
                    mount = {mount}/>
            </NavLink>

            {/* When adding a new component to the navbar,
                make sure to add it above the settings item
                because settings uses margin-top: auto to
                stay at the bottom. */}
            <NavItem id="settings"
                text="Settings"
                icon={mdiCogOutline}
                mount = {mount}/>
        </div>
    );
};