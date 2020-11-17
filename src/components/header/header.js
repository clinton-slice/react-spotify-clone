import './header.css';
import PropTypes from 'prop-types';
import React from 'react';
import { Avatar } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

import { useStateValue } from '../../wrappers/app-state-provider';
import { Back, Forward } from '../../assets/icons';

const Header = ({ spotify }) => {
  const [{ user, playlists }] = useStateValue();
  console.log('Header : ', spotify);
  console.log('playlists : ', playlists);
  // getplaylist(id, options, callback)
  return (
    <div className="header">
      <div className="header_left">
        <div className="playlist_control">
          <div className="back bg_black">
            <Back />
          </div>
          <div className="forward bg_black">
            <Forward />
          </div>
        </div>

      </div>
      <div className="header_right">
        <div className="profile_black">
          <Avatar alt={user?.display_name} src={user?.images[0].url} className="profile_avatar" />
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spotify: PropTypes.object.isRequired,
};
