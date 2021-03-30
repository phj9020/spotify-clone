import React from 'react';
import styled from 'styled-components';
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import {useStateValue} from '../dataLayer/StateProvider';

const SidebarContainer = styled.div`
    flex: 0.15;
    min-height: 100vh;
    min-width: 230px;
    background-color: #040404;
    color: white;
    padding-top: 30px;
    padding-bottom: 105px;
    padding-left: 10px;
    padding-right:10px;

    img {
        height: 45px;
        object-fit: contain;
        padding: 10px;
    }
    
    hr {
        border: 1px solid #282828;
        width: 90%;
        margin: 10px auto;
    }
    strong {
        font-size: 14px;
        margin-left: 10px;
    }
`


function Sidebar() {
    const {playlist} = useStateValue();
    console.log(playlist)
    return (
        <SidebarContainer>
            <img src={require("../image/Spotify_Logo.png").default} alt="logo" />
            <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />
            <br />
            <strong>PlayLists</strong>
            <hr />
            {playlist?.items?.map(playList => <SidebarOption key={playList.id} title={playList.name} />)}
        </SidebarContainer>
    )
}

export default Sidebar
