import './App.css';
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './screens/login';
import { getTokenFromResponse } from './config/spotify';
import Player from './screens/player/player';
import { useStateValue } from './wrappers/app-state-provider';

// Context for the app state
const spotify = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useStateValue();
  React.useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    // clear the access token for security reasons
    window.location.hash = '';
    const obtainedToken = hash.access_token;
    if (obtainedToken) {
      spotify.setAccessToken(obtainedToken);
      dispatch({
        type: 'SET_TOKEN',
        token: obtainedToken,
      });
      spotify.getMe().then((_user) => {
        dispatch({
          type: 'SET_USER',
          user: _user,
        });
      });
    }
  }, [token]);
  console.log('user: ', user);
  console.log('token: ', token);
  return (

    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>

  );
}

export default App;
