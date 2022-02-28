import React from "react";
import { ProjectName } from "./ProjectName"
import { TAList } from "./TAList"
import { StudentList } from "./StudentList"
import { SettingsButton } from "./SettingsButton"
import { DemoDate } from "./DemoDate"

interface Props {
    
}

export const Top: React.FC<Props> = () => {
    return (
        <div className="Top">Top
            <ProjectName/>
            <TAList TAName="Test"/>
            <StudentList/>
            <SettingsButton/>
            <DemoDate/>
        </div>
    );
}