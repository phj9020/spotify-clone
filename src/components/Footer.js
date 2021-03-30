import React from 'react';
import styled from 'styled-components';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import Grid from '@material-ui/core/Grid';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import Slider from '@material-ui/core/Slider';

const FooterContainer = styled.div`
    width: 100%;
    height:65px;
    position: fixed;
    bottom: 0;
    background-color: #282828;
    padding: 20px;
    display: flex;
    justify-content: space-between;
`

const FooterLeft = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 60px;
        object-fit: contain;
        margin-right: 20px;
    }
    .footer_songInfo {
        color: white;
        h4 {
            margin-bottom: 5px;
        }
        p {
            font-size: 12px;
        }
    }

`

const FooterCenter = styled.div`
    flex: 0.4;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:white;
    padding: 0 100px;
    
    .footer_green {
        color: #1ed15e;
    }
    .footer_icon:hover,
    .footer_green:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2);
        cursor: pointer;
    }
`

const FooterRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    color:white;
    
    .MuiGrid-container {
        display: flex;
        justify-content: center;
    }
    .MuiSlider-root {
        width: 150px;
        color: green;
    }

    .footer_icon:hover {
        transform: scale(1.2);
        transition: 0.2s transform ease-in-out;
        cursor: pointer;
    }
    
`

function Footer() {
    return (
        <FooterContainer>
            <FooterLeft>
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/BTS_-_Dynamite_%28official_cover%29.png" alt="" />
                <div className="footer_songInfo">
                    <h4>Dynamite</h4>
                    <p>BTS</p>
                </div>
            </FooterLeft>
            <FooterCenter>
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </FooterCenter>
            <FooterRight>
                <Grid container spacing={2}>
                    <Grid  item>
                        <PlaylistPlayIcon className="footer_icon" />
                    </Grid>
                    <Grid  item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid  item >
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer
