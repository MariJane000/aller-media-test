import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

export const CustomRoute = (props) => {
  const renderRedirectRoute = (redirectProps) => {
    const { path, redirectTo } = redirectProps;
    return <Redirect key={path} from={path} to={redirectTo} />;
  };

  const renderSubRoutes = (subRoutes) => {
    return (
      <Switch>{subRoutes.map((routeProps) => renderRoute(routeProps))}</Switch>
    );
  };

  const renderComponentRoute = (componentProps) => {
    const { component: Component, path, subRoutes = [] } = componentProps;

    return (
      <Component key={path} {...componentProps}>
        {' '}
        {renderSubRoutes(subRoutes)}{' '}
      </Component>
    );
  };

  const renderRoute = (props) => {
    return props.redirectTo
      ? renderRedirectRoute(props)
      : renderComponentRoute(props);
  };

  return <Route render={() => renderRoute(props)} />;
};

CustomRoute.propTypes = {
  path: propTypes.string,
  redirectTo: propTypes.string,
  exact: propTypes.bool,
  component: propTypes.object,
  subRoutes: propTypes.array,
};

export default CustomRoute;
