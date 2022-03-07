import React from 'react'
import userInfo from '../../Interfaces'
import styled from 'styled-components';

interface Props {
    text: string
    users: userInfo[] 
}

export const NameList: React.FC<Props> = ({text, users}) => {
    const Users = users.map((user: userInfo, i: number) => {
        return <li key={i}>
            <A href={user.link} target='_blank' rel='noopener noreferrer' link={user.picture}></A>
        </li>
    });

    return (
        <Unordered>
            <li>{text}</li>
            {Users}
        </Unordered>
    );
}

const pictureSize = '20px'

const Unordered = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    & > li:first-child {
        margin-right: 5px;
        line-height: ${pictureSize};
    }
`;

const A = styled.a<{ link: string }>`
    background-image: url("${p => p.link}");
    background-size: contain;
    height: ${pictureSize};
    width: ${pictureSize};
    display: block;
    border-radius: 50%;
    margin: 0 1.5px;
`;