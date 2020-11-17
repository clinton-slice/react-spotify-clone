import React from 'react';
import './player.css';
import PropTypes from 'prop-types';

const Player = ({ spotify }) => {
  console.log('spotify: ', spotify);
  return (
    <div className="player">
      <div className="player_body" />
    </div>
  );
};
export default Player;

Player.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spotify: PropTypes.object.isRequired,
};
