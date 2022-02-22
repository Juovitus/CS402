import React from "react";
import '../../App.css'

interface Props {
    text: string
}

export const Navbar: React.FC<Props> = ({text}) => {
    return (
        <div className="Nav">
            {text}
        </div>
    );
};