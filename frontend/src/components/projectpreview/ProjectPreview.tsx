import React from "react";
import { Top } from "./Top"
import { Bottom } from "./Bottom"
interface Props {
    
}
//tbh might not be needed still not sure how the hierarchy works entirely
export const ProjectPreview: React.FC<Props> = () => {
    return (
        <div className='ProjectPreview'>
            ProjectPreview
            <Top/>
            <Bottom/>
        </div>
    );
}