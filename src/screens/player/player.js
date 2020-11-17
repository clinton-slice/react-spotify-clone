import React from 'react';
import './player.css';
import PropTypes from 'prop-types';
import Sidebar from '../../components/sidebar/sidebar';
import ControlBar from '../../components/controlbar/control-bar';
import Body from '../../components/body/body';

const Player = ({ spotify }) => (
  <div className="player">
    <div className="player_body">
      <Sidebar />
      <Body />
    </div>
    <ControlBar spotify={spotify} />
  </div>
);
export default Player;

Player.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spotify: PropTypes.object.isRequired,
};
