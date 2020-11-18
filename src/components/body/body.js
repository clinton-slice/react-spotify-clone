/* eslint-disable prefer-const */
import './Body.css';
import PropTypes from 'prop-types';
import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { PlaylistTracks } from 'react-spotify-api';
import Header from '../header/Header';
import { useStateValue } from '../../wrappers/app-state-provider';
import SongList from '../song-list/SongList';

const Body = ({ spotify }) => {
  const [{ playlist }, dispatch] = useStateValue();

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `spotify:playlist:${playlist}`,
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((response) => {
          dispatch({
            type: 'SET_ITEM',
            item: response.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header />
      <div className="body_info">
        <img
          src={playlist?.images[0].url}
          alt=""

        />
        <div className="body_infoText">
          <p>PLAYLIST</p>
          <h2>{playlist?.name ? playlist?.name : 'Loading...'}</h2>
          <p>{playlist?.description ? playlist?.description : ''}</p>
          <p>
            <b>{`${playlist?.owner?.display_name}.`}</b>
            {`${playlist?.tracks?.total} songs`}
          </p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon
            className="body_shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <PlaylistTracks id={playlist?.id}>
          {({ data: tracks }) => (
            tracks && tracks.items.map((item, index) => (
              <SongList
                playSong={playSong}
                track={item.track}
                // eslint-disable-next-line react/no-array-index-key
                key={`${item.track.id}-${index}`}
              />
            ))

          )}
        </PlaylistTracks>
      </div>
    </div>
  );
};

export default Body;

Body.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spotify: PropTypes.object.isRequired,
};
