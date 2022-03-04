import React from "react";
import { Top } from "./Top"
import { Bottom } from "./Bottom"

interface Props {
    
}


export const ProjectPreview: React.FC<Props> = () => {
    const pName = 'MedHub'

    return (
        <div className='ProjectPreview'>
            <Top
                projectName={pName}
            />
            <Bottom/>
        </div>
    );
}