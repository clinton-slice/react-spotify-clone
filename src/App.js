import './App.css';
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './screens/login';
import { getTokenFromResponse } from './config/spotify';
import Player from './screens/player/player';

// Context for the app state
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    // clear the access token for security reasons
    window.location.hash = '';
    const obtainedToken = hash.access_token;
    if (obtainedToken) {
      setToken(obtainedToken);
      spotify.setAccessToken(obtainedToken);
      spotify.getMe().then((user) => {
        console.log('user: ', user);
      });
    }
    console.log('I HAVE TOKEN >>> ', token);
  }, []);
  return (

    <div className="app">
      {token ? <Player /> : <Login />}
    </div>

  );
}

export default App;
