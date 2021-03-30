import React from 'react';
import styled from 'styled-components';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

const Track = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;

    :hover {
        background-color: rgb(105,105,105);
    }
    
    .MuiSvgIcon-root {
        cursor: pointer;
        font-size: 40px;
        margin-right: 20px;
    }
    img {
        height: 50px;
        object-fit: contain;
        margin-right: 20px;
    }

    .track__info {

        h4{
            margin-bottom: 5px;
        }
        p {
            font-size:12px;
            color: darkgrey;
        }
    }
`

function SongRow({track}) {
    console.log(track)
    return (
        <Track>
            <PlayArrowOutlinedIcon />
            <img src={track?.album?.images[0].url} alt="" />
            <div className="track__info">
                <h4>{track.name}</h4>
                <p>{track?.artists?.map(artist => artist.name)}{"-"}{track?.album?.name}</p>
            </div>
        </Track>
    )
}

export default SongRow;
