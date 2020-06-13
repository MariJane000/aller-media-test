import {
    SET_ARTICLES,
    SET_ARTICLES_LOADER,
} from './constants';

export const setArticles = (articles) => ({
    type: SET_ARTICLES,
    articles,
});

export const setArticlesLoader = (articlesLoader) => ({
    type: SET_ARTICLES_LOADER,
    articlesLoader,
});
