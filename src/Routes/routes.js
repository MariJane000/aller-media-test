export const basedRoutes = [
    {
        exact: true,
        path: '/',
        // component: BuyerPage,
    },
    {
        exact: true,
        path: '/list',
        // component: NotificationSettingsPage,
    },
    {
        path: '*',
        redirectTo: '/',
    },
];


// import HomePage from 'containers/HomePage/Loadable';
// import ContactPage from 'containers/ContactPage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

