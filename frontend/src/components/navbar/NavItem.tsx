import React from "react";

interface Props {
    text: string
}

export const NavItem: React.FC<Props> = ({text}) => {
    return (
        <div className="NavItem">
            <p>{text}</p>
        </div>
    );
};