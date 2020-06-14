import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

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
  size: PropTypes.oneOf(['small', 'default', 'large']),
  fullscreen: PropTypes.bool,
  type: PropTypes.oneOf(['light', 'dark']),
};

export default Loader;
