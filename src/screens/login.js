import React from 'react';
import './login.css';
import { accessUrl } from '../config/spotify';

const Login = () => (
  <div className="login">
    <img
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt="spotify-logo"
    />
    <a href={accessUrl}>LOGIN TO SPOTIFY</a>
  </div>
);

export default Login;
