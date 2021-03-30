import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
    flex: 0.85;
    min-height: 100vh;
    background: linear-gradient(rgb(91, 87, 115),rgba(0, 0, 0, 1));
    color: white;
    padding: 30px;
`

function Body() {
    return (
        <BodyContainer>
            <h1>body</h1>
        </BodyContainer>
    )
}

export default Body
