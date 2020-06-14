import React, { createContext, useReducer, Children } from 'react';
import PropTypes from 'prop-types';

import { initialState, reducer } from './Store/reducer';

const articlesStore = createContext(initialState);
const { Provider } = articlesStore;

const ArticlesContext = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>{Children.only(children)}</Provider>
  );
};

ArticlesContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export { articlesStore, ArticlesContext };
