import React, {useEffect, useState} from 'react';
import Login from './components/Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

// create spotify instance
const spotifyApi = new SpotifyWebApi();


function App() {
  const [token, setToken] = useState(null);
  
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
      });
    }

  }, []);

  return (
    <div className="App">
      {token ? <h1>I am Logged in</h1> : <Login />}
    </div>
  );
}

export default App;
