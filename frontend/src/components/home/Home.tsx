import React from "react";
import { ProjectPreview } from "../projectpreview/ProjectPreview";

interface Props {
    
}

export const Home: React.FC<Props> = () => {
    return (
        <div className='Home'>
            <ProjectPreview />
        </div>
    );
}