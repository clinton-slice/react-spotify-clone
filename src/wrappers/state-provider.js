import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

StateProvider.propTypes = {
  reducer: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  initialState: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export const useStateValue = () => useContext(StateContext);
