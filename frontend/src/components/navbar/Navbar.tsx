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
            <NavItem icon={mdiClose}/>
            <NavItem text="Projects" icon={mdiApplicationOutline}/>
            <NavItem text="Inbox" icon={mdiMailboxOpenOutline}/>
            <NavItem text="Settings" icon={mdiCogOutline} />
        </div>
    );
};