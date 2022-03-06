import React from "react";
import Icon from '@mdi/react';
import styled from 'styled-components';

interface Props {
    id: string
    text?: string
    icon: string
    mount: boolean
}

export const NavItem: React.FC<Props> = ({text, icon, id, mount}) => {
    const cn = `NavItem ${id}-nav-item`

    return (
        <div className={cn}>
            <Icon path={icon}
                size='36px'
                className="nav-item-icon"
                />
            {mount ? <NavItemText>{text}</NavItemText> : null}
        </div>
    );
};

const NavItemText = styled.span`
    font-size: 28px;
    font-weight: 600;
    margin-right: 50px;
    margin-left: 20px;
`;