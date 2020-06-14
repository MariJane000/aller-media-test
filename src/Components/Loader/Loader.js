import React from 'react';
import { Spin } from 'antd';
import propTypes from 'prop-types';

import './Loader.scss';

export const Loader = (props) => {
  const { size, fullscreen, type } = props;

  return (
    <div className={`loader ${fullscreen ? 'loader-fullscreen' : ''} ${type}`}>
      <Spin size={size} />
    </div>
  );
};

Loader.defaultProps = {
  size: 'default',
  fullscreen: false,
  type: 'light',
};

Loader.propTypes = {
  size: propTypes.oneOf(['small', 'default', 'large']),
  fullscreen: propTypes.bool,
  type: propTypes.oneOf(['light', 'dark']),
};

export default Loader;
