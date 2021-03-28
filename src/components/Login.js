import React from 'react';
import styled from 'styled-components';
import {loginUrl} from '../spotify';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    display:grid;
    place-items: center;
    
`

const Image = styled.img`
    height: 100px;
    object-fit: contain;
`

const Button = styled.a`
    padding: 10px 20px;
    background-color: #1DB954;
    border-radius: 99px;
    font-size: 14px;
    font-weight:800;
    color: white;
    text-decoration: none;
    
`

function Login() {
    
    return (
        <Container>
            <Image src={require("../image/Spotify_Logo.png").default} alt="spotify-logo" /> 
            <Button href={loginUrl}>Login with Spotify</Button>
        </Container>
    )
}

export default Login;
