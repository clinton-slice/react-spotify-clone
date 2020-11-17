/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import React from 'react';
import './SongList.css';

function SongList({ track, playSong }) {
  console.log(track);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="songList" onClick={() => playSong(track.id)}>
      <img className="songList_album" src={track.album.images[0].url} alt="" />
      <div className="songList_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(', ')}
          -
          {' '}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongList;

SongList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  track: PropTypes.object.isRequired,
  playSong: PropTypes.func.isRequired,
};
