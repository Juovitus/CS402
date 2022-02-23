import React from "react";
import Icon from '@mdi/react'

interface Props {
    id: string
    text?: string
    icon: string
}

export const NavItem: React.FC<Props> = ({text, icon, id}) => {
    const cn = `NavItem ${id}-nav-item`

    return (
        <div className={cn}>
            <Icon path={icon}
                size='36px'
                className="nav-item-icon"
                />
            <span>{text}</span>
        </div>
    );
};