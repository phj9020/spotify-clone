import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../dataLayer/StateProvider';

const HeaderContainer = styled.div`
    width:100%;
    height:50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding: 10px;
`

const HeaderLeft = styled.div`
    flex: 0.5;
    min-width: 200px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    background-color: white;
    color: grey;
    border-radius: 30px;
    padding: 10px;

    input[type="text"] {
        border: none;
        width: 100%;
        outline: none;
    }

`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    background-color:#040404;
    border-radius: 30px;
    padding: 5px 10px;

    .MuiAvatar-root {
        width:30px;
        height: 30px;
        margin-right: 10px;
    }

    h4 {
        font-size: 14px;
        font-weight: 500;
    }
`

function Header({spotifyApi}) {
    const {user} = useStateValue();
    console.log(user)
    return (
        <HeaderContainer>
            <HeaderLeft>
                <SearchIcon />
                <input placeholder="Search for Artists, Songs" type="text" />
            </HeaderLeft>
            <HeaderRight>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>Welcome! {user?.display_name}</h4>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header
