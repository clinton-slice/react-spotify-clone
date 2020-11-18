import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css';

const SidebarOption = ({ option, Icon }) => (
  <div className="sidebarOption">

    {Icon && (
      <div className="sidebarOption_icon">
        <Icon />
      </div>
    )}
    {Icon ? <span className="sidebarOption_menu">{option}</span> : <p>{option}</p>}
  </div>
);

SidebarOption.propTypes = {
  option: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default SidebarOption;
