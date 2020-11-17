import React from 'react';
import './player.css';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/Sidebar';
import ControlBar from '../../components/controlbar/ControlBar';
import Body from '../../components/body/Body';

const Player = ({ spotify }) => (
  <div className="player">
    <div className="player_body">
      <Sidebar />
      <Body spotify={spotify} />
    </div>
    <ControlBar spotify={spotify} />
  </div>
);
export default Player;

Player.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spotify: PropTypes.object.isRequired,
};
