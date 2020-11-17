import React from 'react';
import { useStateValue } from '../../wrappers/app-state-provider';
import './sidebar.css';
// import HomeIcon from '@material-ui/icons/Home';
// import SearchIcon from '@material-ui/icons/Search';
// import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
// import SidebarOption from './SidebarOption';
// import { getTokenFromResponse } from './spotify';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  console.log(playlists, dispatch);

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Your Library" /> */}
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {/* {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))} */}
    </div>
  );
};

export default Sidebar;
