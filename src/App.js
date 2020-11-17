import './App.css';
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './screens/login/Login';
import { getTokenFromResponse } from './config/spotify';
import Player from './screens/player/Player';
import { useStateValue } from './wrappers/app-state-provider';

// Context for the app state
const spotify = new SpotifyWebApi();

function App() {
  const [{ token, playlistId }, dispatch] = useStateValue();
  // console.log(token);
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
      spotify.getUserPlaylists().then((_playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: _playlists,
        });
      });
      spotify.getPlaylist(`${playlistId}`).then((response) => dispatch({
        type: 'SET_PLAYLIST',
        playlist: response,
      }));
    }
  }, [token]);

  return (

    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>

  );
}

export default App;
