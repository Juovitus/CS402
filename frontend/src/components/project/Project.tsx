import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'

interface Props {

}

export const Project: React.FC<Props> = () => {
    const { id } = useParams();
    
    return (
        <div className='Project'>
            <Text>Team {id}</Text>
        </div>
    );
}

const Text = styled.span`
    color: white;
`;