import './Header.css';
import React from 'react';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../../wrappers/app-state-provider';
import { Back, Forward } from '../../assets/icons';

const Header = () => {
  const [{ user }] = useStateValue();

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
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
      </div>
    </div>
  );
};

export default Header;
