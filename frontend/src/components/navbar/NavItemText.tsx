import React from "react";

interface Props {
    text?: string
}

export const NavItemText: React.FC<Props> = ({text}) => {
    return (
        <span>{text}</span>
    );
};