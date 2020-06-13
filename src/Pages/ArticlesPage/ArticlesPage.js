import React, { useEffect } from 'react';
import { useGetArticles } from '@Context/Articles/Hooks/useGetArticles';
import Loader from '@Components/Loader/Loader';
import { ArticlesContext } from '@Context/Articles';
import { Switch, Route } from 'react-router-dom';
// import './ArticlesGrid.scss';

export const ArticlesPage = (props) => {
    const { articlesLoader, getArticles } = useGetArticles();

    useEffect(() => {
        getArticles();
    }, [])
    
    const renderLoader = () => {
        return <Loader size="large" fullscreen style="white" />;
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

const ArticlesPageWithContext = () => (routerProps) => {
    return (
        <ArticlesContext>
            <ArticlesPage {...routerProps} />
        </ArticlesContext>

    );
};

export default ArticlesPageWithContext();
