// import { findAllByDisplayValue } from '@testing-library/react';

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: 'BQBbJAcqxbWcvblRfTlikSHgigWBzUdj5aCTS8F1jV4A61erif9XOBH_CwB46L0R1OD0OEOmW9-x9AIFVf8BNtRBv1ly-bc0yXZ8BNlpHCM5nwgegs6_tDflWNEa8ToT8lrZuuPQG5nWqhUH8tfxqCQSrpYMh4S_JUidrU2s2yVa4aLo',
};

export const reducer = (state, action) => {
  console.log(action);
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

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
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
