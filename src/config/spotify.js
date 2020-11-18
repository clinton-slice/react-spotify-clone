// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'f6fa8ff172fb44af941e6843f129b04f';
const redirectUri = 'http://localhost:3000/';

// scopes array contains actions the app would let user perform
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];
export const getTokenFromResponse = () => window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    // eslint-disable-next-line no-param-reassign
    const parts = item.split('=');
    // eslint-disable-next-line no-param-reassign
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true`;
