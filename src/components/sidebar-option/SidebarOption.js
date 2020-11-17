import React from 'react';
import PropTypes from 'prop-types';
import './SidebarOption.css';

const SidebarOption = ({ option, Icon }) => (
  <div className="sidebarOption">
    {Icon && <Icon className="sidebarOption_icon" />}
    {Icon ? <h4>{option}</h4> : <p>{option}</p>}
  </div>
);

SidebarOption.propTypes = {
  option: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
};

export default SidebarOption;
