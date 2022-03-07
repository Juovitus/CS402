import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

interface Props {
    projectName: string
    demoDate: Number
}

export const Top: React.FC<Props> = ({projectName, demoDate}) => {
    const projectPath = `/project/${projectName}`

    return (
        <Container>
            <ProjectName to={projectPath}>{projectName}</ProjectName>
            {TAList}
            <BottomRow>
                {StudentList}
                <DemoDate>Demo - {demoDate} days</DemoDate>
            </BottomRow>
        </Container>
    );
}

const Container = styled.div`
    border-radius: 10px 10px 0 0;
    box-sizing: border-box;
    background-color: #F6F6F6;
    /* top right bottom left */
    padding: 10px 7px 10px 7px;
    box-shadow: rgba(0, 0, 0, 0.26) 0px 1px 4px;
    z-index: 1;
`;

const ProjectName = styled(Link)`
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
`;

const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 4px 0;
`;

const DemoDate = styled.div`
    border-radius: 10px;
    padding: 1px 8px;
    background-color: #ef946c;
    box-shadow: rgba(0, 0, 0, 0.26) 0px 1px 4px;
`;

//TODO make student list and ta list their own fn component
const TAList = <div id="ta-name">TA</div>
const StudentList = <div id="student-list">Students</div>