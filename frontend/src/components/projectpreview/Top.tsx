import React from "react";

interface Props {
    projectName: string
}

export const Top: React.FC<Props> = ({projectName}) => {
    return (
        <div className="Top">
            {ProjectName(projectName)}
            {TAList}
            {BottomRow(1)}
        </div>
    );
}

/* 
Not sure if this will need to be a FC in the future,
leaving as normal fn for now.
*/
const ProjectName = (name:string) => {
    return (
        <div id="project-name">{name}</div>
    );
}

const BottomRow = (days:Number) => {
    return (
        /* bottom-row is flex container */
        <div className="bottom-row">
            <div id="student-list">Students</div>
            <div id="demo-date">Demo - {days} days</div>
        </div>
    );
}

const TAList = <div id="ta-name">TA</div>