import React, { Fragment } from 'react';

import { Header } from '../Header';
import './Layout.scss';

export const Layout = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <div className="layout">
        <div className="layout-header">
          <Header />
        </div>
        <div className="layout-content">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
