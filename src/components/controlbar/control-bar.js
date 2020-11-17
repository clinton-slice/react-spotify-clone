import React from 'react';
import './control-bar.css';
import PropTypes from 'prop-types';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import { Grid, Slider } from '@material-ui/core';
import { useStateValue } from '../../wrappers/app-state-provider';

const ControlBar = ({ spotify }) => {
  const [{ item, playing }, dispatch] = useStateValue();

  React.useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((response) => {
      dispatch({
        type: 'SET_PLAYING',
        playing: response.is_playing,
      });

      dispatch({
        type: 'SET_ITEM',
        item: response.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };
  return (
    <div className="controlbar">
      <div className="controlbar_songDetails">
        <img
          className="controlbar_albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="controlbar_songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
        ) : (
          <div className="controlbar_songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="controlbar_controls">
        <ShuffleIcon className="controlbar_green" />
        <SkipPreviousIcon
          onClick={skipNext}
          className="controlbar_icon"
        />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="controlbar_icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="controlbar_icon"
          />
        )}
        <SkipNextIcon
          onClick={skipPrevious}
          className="controlbar_icon"
        />
        <RepeatIcon className="controlbar_green" />
      </div>
      <div className="controlbar_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>

    </div>
  );
};

export default ControlBar;

ControlBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  spotify: PropTypes.object.isRequired,
};
