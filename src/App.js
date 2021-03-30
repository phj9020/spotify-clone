import React, {useEffect} from 'react';
import Login from './components/Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import {useDispatch} from './dataLayer/StateProvider';
import {SETUSER, SETTOKEN, SETPLAYLIST, SETDISCOVER} from './dataLayer/reducer';
import {useStateValue} from './dataLayer/StateProvider';

// create spotify instance
const spotifyApi = new SpotifyWebApi();

const device_id = '127cf1f9d2db22860b242eee4ac961e0d64081d3'

function App() {
  const dispatch = useDispatch();
  const {token}= useStateValue();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clear access token from url for security reason 
    window.location.hash= "";
    const _token = hash.access_token;
    
    if(_token) {
      dispatch({type: SETTOKEN, token: _token})

      // connect spotifyApi to react
      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then(user => {
        dispatch({type: SETUSER, user: user })
      });

      // get User PlayList and store in global state 
      spotifyApi.getUserPlaylists().then(playlist => {
        dispatch({type: SETPLAYLIST, playlist: playlist})
      })

      spotifyApi.getPlaylist("2BT6JKWp3rCFBbCz8mZpjG").then(response => {
        dispatch({type: SETDISCOVER, discover_weekly: response})
      })

    }
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
