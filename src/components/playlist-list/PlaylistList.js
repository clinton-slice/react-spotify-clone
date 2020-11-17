/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import './PlaylistList.css';

const PlaylistList = ({ option, onSelectPlaylist }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className="sidebarOption" onClick={onSelectPlaylist}>
    <p>{option}</p>
  </div>
);

PlaylistList.propTypes = {
  option: PropTypes.string.isRequired,
  onSelectPlaylist: PropTypes.func.isRequired,
};

export default PlaylistList;
