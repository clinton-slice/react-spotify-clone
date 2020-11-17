import React from 'react';
import { useStateValue } from '../../wrappers/app-state-provider';
import './sidebar.css';
import SidebarOption from '../sidebar-option/SidebarOption';
import { Home, Library, Search } from '../../assets/icons';
// import { getTokenFromResponse } from './spotify';

const Sidebar = () => {
  const [{ playlists }] = useStateValue();

  console.log('playlists: ', playlists);
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
      {/* <SidebarOption option="playlist" /> */}
      {playlists?.items?.map(({ name, id }) => (
        <SidebarOption option={name} id={id} key={id} />
      ))}
    </div>
  );
};

export default Sidebar;
