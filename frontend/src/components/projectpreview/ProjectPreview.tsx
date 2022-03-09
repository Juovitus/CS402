import React from "react";
import { Top } from "./Top";
import { Bottom } from "./Bottom";
import styled from 'styled-components';
import userInfo from '../../Interfaces'

interface Props {
    key: any
}

export const ProjectPreview: React.FC<Props> = () => {
    const pName: string = Math.floor(Math.random() * (100 - 1 + 1) + 1).toString()
    const dDate: Number = parseInt(pName)
    const usr: userInfo = {
        picture: 'https://avatars.githubusercontent.com/u/31934028?v=4',
        link: 'https://github.com/Aarodynamics3'
    }
    const TAs: userInfo[] = [usr]
    const Students: userInfo[] = [usr, usr, usr, usr,]

    return (
        <Container>
            <Top
                projectName={pName}
                demoDate={dDate}
                TAs={TAs}
                Students={Students}
            />
            <Bottom/>
        </Container>
    );
}

const Container = styled.div`
    width: 330px;
    height: 200px;
    overflow: hidden;
    display: grid;
    grid-template-rows: min-content 1fr;
    color: rgb(44, 44, 44);
    font-size: 14px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 8px 0px;
`;