import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const BodyContainer = styled.div`
    flex: 0.85;
    min-height: 100vh;
    background: linear-gradient(rgb(91, 87, 115),rgba(0, 0, 0, 1));
    color: white;
    
`

function Body({spotifyApi}) {
    return (
        <BodyContainer>
            <Header spotifyApi={spotifyApi} />
        </BodyContainer>
    )
}

export default Body
