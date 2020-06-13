import React from 'react';
import { Switch } from 'react-router-dom';

import { routes } from '@Routes';

import { CustomRoute } from '@Components/CustomRoute';
import { Layout } from '@Components/Layout';
// import Loader from '@Components/Loader/Loader';


export const App = () => {

    const renderRoutes = () =>
        routes.map((r) => <CustomRoute key={r.path} {...r} />);

    // const renderLoader = () => (
        // <Loader size="large" fullscreen style="white fill" />
    // );


    const renderLayout = () => (
        <Layout>
            <Switch>
                {renderRoutes()}
            </Switch>
        </Layout>
    );

    // return <>{isLoading ? renderLoader() : renderLayout()}</>;
    return <>{renderLayout()}</>;

};

export default App;
