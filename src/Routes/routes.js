import ArticlesPage from "@Pages/ArticlesPage/Loadable";
import ArticlesGrid from "@Pages/ArticlesPage/ArticlesGrid/Loadable";
import ArticlesList from "@Pages/ArticlesPage/ArticlesList/Loadable";


export const routes = [
    {
        exact: true,
        path: '/',
        redirectTo: 'articles',
    },
    {
        path: '/articles',
        component: ArticlesPage,
        subRoutes: [
            {
                exact: true,
                path: '/articles/grid',
                component: ArticlesGrid,
            },
            {
                exact: true,
                path: '/articles/list',
                component: ArticlesList,
            },
            {
                exact: true,
                path: '/articles',
                redirectTo: '/articles/grid',
            },

        ]
    },
    {
        path: '*',
        redirectTo: '/',
    },
];


