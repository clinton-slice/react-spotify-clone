import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const AppStateContext = createContext();

export const AppStateProvider = ({ reducer, initialState, children }) => (
  <AppStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppStateContext.Provider>
);

export const useStateValue = () => useContext(AppStateContext);

AppStateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialState: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};
