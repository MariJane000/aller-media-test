import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

export const CustomRoute = (props) => {
   

    const renderRedirectRoute = (redirectProps) => {
        console.log('redirectProps', redirectProps)
        // debugger;
        return <Redirect from={redirectProps.path} to={redirectProps.redirectTo} />
    }

    const renderSubRoutes = (subRoutes) => {
        return (
            <Switch>
                {subRoutes.map((routeProps, i) => (
                    renderRoute(routeProps)
                ))}

            </Switch>
        )
    };

    const renderComponentRoute = (componentProps) => {
        const  { component: Component, subRoutes = [] } = componentProps;

        return <Component {...componentProps}> {renderSubRoutes(subRoutes)} </Component>
    }

    const renderRoute = (props) => {
        // debugger
        return  props.redirectTo ? renderRedirectRoute(props) : renderComponentRoute(props);
    }

    return (
        <Route
            render={() => renderRoute(props)}
        />
    )
};

export default CustomRoute;
