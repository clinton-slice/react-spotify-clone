import React from 'react';
import './body.css';
// import PropTypes from 'prop-types';

const Body = (props) => {
  console.log(props);
  return (
    <div className="body">
      <div className="body_info">
        <h1>Body</h1>
      </div>
    </div>
  );
};

Body.propTypes = {

};

export default Body;
