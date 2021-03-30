import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import {useStateValue, useDispatch} from '../dataLayer/StateProvider';
import {SETFAVLIST} from '../dataLayer/reducer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const BodyContainer = styled.div`
    flex: 0.85;
    height: 102vh;
    background: linear-gradient(rgb(91, 87, 115),rgba(0, 0, 0, 1));
    color: white;
    padding: 10px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        display:none;
    }
`


const BodyContent = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
    margin-bottom: 20px;
    img {
        height: 20vh;
        object-fit: contain;
        margin: 0 20px;
        box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
    }
    .body__info {
        flex: 1;
        h2{
            font-size: 48px;
            margin-top: 10px;
        }
        p { 
            font-size: 14px;
        }
    }
`

const BodyListOfSongs = styled.div`
    padding: 10px;

    .body__icons {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-bottom: 50px;

        .body__icons__play {
            font-size: 70px;
            margin: 0 20px;
            :hover{
                transition: transform 0.2s ease-in-out;
                transform: scale(1.1);
            }
        }
        .body__icons__fav {
            font-size: 40px;
            margin-right: 20px;
        }
        .body__icons__more {
            font-size: 40px;
    
        }
    }
`

function Body({spotifyApi}) {
    const {discover_weekly, fav_playlist} = useStateValue();
    const dispatch = useDispatch();
    console.log(discover_weekly)
    console.log(fav_playlist)

    const changeColor = () => {
        const heart = document.querySelector(".body__icons__fav");
        if(heart.style.color === "white") {
            heart.style.color= "#e8504d";
            dispatch({type:SETFAVLIST, fav_playlist: true})
        } else {
            heart.style.color= "white";
            dispatch({type:SETFAVLIST, fav_playlist: false})
        }
    }
    return (
        <BodyContainer>
            <Header spotifyApi={spotifyApi} />
            <BodyContent>
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body__info">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </BodyContent>
            <BodyListOfSongs>
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__icons__play" />
                    <FavoriteIcon onClick={changeColor} className="body__icons__fav" />
                    <MoreHorizIcon className="body__icons__more" />
                </div>
                {discover_weekly?.tracks?.items.map((item, index) => 
                    <SongRow key={index} track={item.track} />)
                }
            </BodyListOfSongs>
        </BodyContainer>
    )
}

export default Body
