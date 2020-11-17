import './body.css';
import PropTypes from 'prop-types';
import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Header from '../header/header';
import { useStateValue } from '../../wrappers/app-state-provider';
import SongList from '../song-list/SongList';

const Body = ({ spotify }) => {
  const [{ discoverWeekly }, dispatch] = useStateValue();
  console.log(discoverWeekly);
  const playPlaylist = () => {
    spotify
      .play({
        context_uri: 'spotify:playlist:37i9dQZEVXcUzDRfZryoxO',
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
  return (
    <div className="body">
      <Header spotify={spotify} />
      {/* <div className="body_info"> */}
      {/* <div className="body_header"> */}
      <div className="body_info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      {/* </div> */}
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon
            className="body_shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discoverWeekly?.tracks.items.map((item) => (
          <SongList
            playSong={playSong}
            track={item.track}
          />
        ))}
      </div>
    </div>
  // </div>
  );
};

export default Body;

Body.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spotify: PropTypes.object.isRequired,
};
