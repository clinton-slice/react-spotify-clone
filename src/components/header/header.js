import './Header.css';
import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../../wrappers/app-state-provider';
import { Back, Forward } from '../../assets/icons';

const Header = () => {
  const [{ user, playlists }, dispatch] = useStateValue();
  let count = 0;
  const next = () => {
    if (count < playlists.length) {
      count += 1;
    }
    dispatch({
      type: 'SET_PLAYLIST',
      playlist: playlists[count],
    });
    // console.log('next id: ', playlists[count]);
  };
  const back = () => {
    if (count > playlists.length) {
      count -= 1;
    }
    dispatch({
      type: 'SET_PLAYLIST',
      playlist: playlists[count],
    });
    // console.log('prev id: ', playlists[count]);
  };
  return (
    <div className="header">
      <div className="header_left">
        <div className="playlist_control">
          <IconButton className="back" onClick={back}>
            <div className="bg_black">
              <Back />
            </div>
          </IconButton>
          <IconButton className="back" onClick={next}>
            <div className="forward bg_black">
              <Forward />
            </div>
          </IconButton>
        </div>

      </div>
      <div className="header_right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
      </div>
    </div>
  );
};

export default Header;
