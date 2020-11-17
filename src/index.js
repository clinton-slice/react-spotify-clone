import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppStateProvider } from './wrappers/app-state-provider';
import { initialState, reducer } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider initialState={initialState} reducer={reducer}>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
