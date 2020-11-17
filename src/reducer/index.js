export const initialState = {
  user: null,
  playlists: [],
  playlistId: '37i9dQZEVXcUzDRfZryoxO',
  spotify: null,
  playlist: null,
  top_artists: null,
  playing: false,
  item: null,
};

export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_PLAYLIST_ID':
      return {
        ...state,
        playlist: action.playlistId,
      };

    case 'SET_PLAYLIST':
      return {
        ...state,
        playlist: action.playlist,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};
