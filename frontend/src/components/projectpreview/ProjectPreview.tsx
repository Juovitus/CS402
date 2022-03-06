import React from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom";
import styled from 'styled-components';

interface Props {
    key: any
}


export const ProjectPreview: React.FC<Props> = () => {
    const pName = 'MedHub'
    const dDate = 4

    return (
        <Container>
            <Top
                projectName={pName}
                demoDate={dDate}
            />
            <Bottom/>
        </Container>
    );
}

const Container = styled.div`
    width: 300px;
    height: 200px;
    overflow: hidden;
    display: grid;
    grid-template-rows: min-content 1fr;
    color: rgb(44, 44, 44);
    font-size: 14px;
`;