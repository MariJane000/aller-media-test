import React from 'react';
import { Switch } from 'react-router-dom';

import { routes } from '@Routes';

import { CustomRoute } from '@Components/CustomRoute';
import { Layout } from '@Components/Layout';

export const App = () => {
  const renderRoutes = () =>
    routes.map((r) => <CustomRoute key={r.path} {...r} />);

  const renderLayout = () => (
    <Layout>
      <Switch>{renderRoutes()}</Switch>
    </Layout>
  );

  return <>{renderLayout()}</>;
};

export default App;
