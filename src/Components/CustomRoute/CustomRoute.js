import React from 'react';
import PropTypes from 'prop-types';
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
        {renderSubRoutes(subRoutes)}
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
  path: PropTypes.string,
  redirectTo: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.object,
  subRoutes: PropTypes.array,
};

export default CustomRoute;
