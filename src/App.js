import React, {useEffect, useState} from 'react';
import Login from './components/Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import {useDispatch} from './dataLayer/StateProvider';
import {SETUSER} from './dataLayer/reducer';

// create spotify instance
const spotifyApi = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    // clear access token from url for security reason 
    window.location.hash= "";
    const _token = hash.access_token;
    
    if(_token) {
      setToken(_token);

      // connect spotifyApi to react
      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then(user => {
        console.log(user)
        dispatch({type: SETUSER, user: user })
      });
    }

  }, []);

  return (
    <div className="App">
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
