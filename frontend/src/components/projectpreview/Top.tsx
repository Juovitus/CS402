import React from "react";

interface Props {
    projectName: string
}

export const Top: React.FC<Props> = ({projectName}) => {
    return (
        <div className="Top">
            {ProjectName(projectName)}
            {TAList}
            {StudentList}
            {DemoDate}
        </div>
    );
}

/* 
Not sure if this will need to be a FC in the future,
leaving as normal fn for now.
*/
const ProjectName = (name:string) => {
    return (
        <div>ProjectName - {name}</div>
    );
}

/*
Same goes for this and below.
*/
const TAList = <div>TAName</div>

const DemoDate = <div>DemoDate</div>

const StudentList = <div>StudentList</div>