import React from 'react';
import { useStateValue } from '../../wrappers/app-state-provider';
import './sidebar.css';
import SidebarOption from '../sidebar-option/SidebarOption';
import { Home, Library, Search } from '../../assets/icons';
import PlaylistList from '../playlist-list/PlaylistList';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  // console.log('playlists: ', playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={Home} option="Home" />
      <SidebarOption Icon={Search} option="Search" />
      <SidebarOption Icon={Library} option="Your Library" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((item) => (
        <PlaylistList
          option={item.name}
          id={item.id}
          key={item.id}
          onSelectPlaylist={() => dispatch({
            type: 'SET_PLAYLIST',
            playlist: item,
          })}
        />
      ))}
    </div>
  );
};

export default Sidebar;
