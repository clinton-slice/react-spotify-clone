// import { findAllByDisplayValue } from '@testing-library/react';

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discoverWeekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // eslint-disable-next-line max-len
  // token: 'BQB2ipzO3UaFa2VT9GTZXUMAw9LLTWTvFZS6cOPgeyheuj2cmS5toh8vCV3dgjyPRbWJz_rCdAkbBjHTmJo-HN4-IrAa0ThtVVP51p1kIALj1QM6xF0qyijB1NSA15Bgc2eJ1AP_fns83wJmx-JLZRTQzfA',
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
        discoverWeekly: action.discoverWeekly,
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
