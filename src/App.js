import './App.css';
import React from 'react';
import Login from './screens/login';
import { getTokenFromResponse } from './config/spotify';

function App() {
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    // clear the access token for security reasons
    window.location.hash = '';
    const obtainedToken = hash.access_token;
    if (obtainedToken) {
      setToken(obtainedToken);
    }
    console.log('I HAVE TOKEN >>> ', token);
  }, []);
  return (
    <div className="app">
      {token ? <div>Log in succesfull</div> : <Login />}
    </div>
  );
}

export default App;
