import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useGetArticles } from '@Context/Articles/Hooks/useGetArticles';
import { ArticlesContext } from '@Context/Articles';

import Loader from '@Components/Loader/Loader';

export const ArticlesPage = (props) => {
    
    const { articlesLoader, getArticles } = useGetArticles();

    useEffect(getArticles, [])
    
    
    const renderLoader = () => {
        return <Loader size="large" fullscreen />;
    };

    const renderArticlesContent = () => {
        return props.children;
    };

    return (
        <div className="page">
            {articlesLoader ? renderLoader() : renderArticlesContent()}
        </div>
    );
};

ArticlesPage.propTypes = {
    children: PropTypes.node,
};

const ArticlesPageWithContext = () => (routerProps) => {
    return (
        <ArticlesContext>
            <ArticlesPage {...routerProps} />
        </ArticlesContext>

    );
};

export default ArticlesPageWithContext();
