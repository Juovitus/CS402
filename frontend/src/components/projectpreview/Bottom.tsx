import React from "react";
import styled from 'styled-components'

interface Props {
    
}

export const Bottom: React.FC<Props> = () => {
    return (
        <Container>Bottom</Container>
    );
}

const Container = styled.div`
    padding: 5px 7px 10px 7px;
    border-radius: 0 0 10px 10px;
    background-color: #ef946c;
`;