import React from 'react'
import userInfo from './Top'
import styled from 'styled-components';

interface Props {
    text: string
    users: userInfo[]
}

export const NameList: React.FC<Props> = ({text, users}) => {
    const Users = users.map((user: userInfo, i: number) => {
        return <li key={i}>
            <a href={user.link} target='_blank' rel='noopener noreferrer'>
                <Image src={user.picture} />
            </a>
        </li>
    });

    return (
        <Unordered>
            <li>{text}</li>
            {Users}
        </Unordered>
    );
}

const Unordered = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
`;