import React, {useEffect} from 'react';
import Login from './components/Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import {useDispatch} from './dataLayer/StateProvider';
import {SETUSER, SETTOKEN} from './dataLayer/reducer';
import {useStateValue} from './dataLayer/StateProvider';

// create spotify instance
const spotifyApi = new SpotifyWebApi();


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
    }

  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
