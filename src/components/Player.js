import React from 'react';
import {useStateValue} from '../dataLayer/StateProvider';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const PlayerContainer = styled.div`
    width: 100%;
`

const PlayerBody = styled.div`
    display: flex;
`

function Player({spotifyApi}) {
    const {user} = useStateValue();
    console.log(user);
    console.log(spotifyApi);
    return (
        <PlayerContainer>
            <PlayerBody>
                <Sidebar />
                <Body spotifyApi={spotifyApi} />
            </PlayerBody>
            <Footer />
        </PlayerContainer>
    )
}

export default Player;
