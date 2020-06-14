import {
    SET_ARTICLES,
    SET_ARTICLES_LOADER,
    EDIT_ARTICLE,
    DELETE_ARTICLE,
    RESTORE_ARTICLE
} from './constants';

import { get } from 'lodash';


export const initialState = {
    articles: [],
    articlesLoader: false,
    articlesLinksMap: {}
};

const reduceLinksMapping = (articles) => {
    return articles.reduce((total, current, rowIndex) => {
        const columns = get(current, 'columns', []);

        columns.forEach((col, colIndex) => {
            total[col.url] = {
                rowIndex,
                colIndex,
                title: col.title,
                url: col.url
            }
        }); 

        return total;
    }, {})
}

const updateArticlesOnEdit = (state, action) => {
    const { articleKey, articleValues } = action;
    const { articles, articlesLinksMap } = state;
    
    const { rowIndex, colIndex } = articlesLinksMap[articleKey];
    const newArticles = [...articles];

    newArticles[rowIndex].columns[colIndex] = {
        ...newArticles[rowIndex].columns[colIndex],
        ...articleValues
    };

    return newArticles;
}

const updateArticlesOnDelete = (state, articleKey) => {
    const { articles, articlesLinksMap } = state;
    
    const { rowIndex, colIndex } = articlesLinksMap[articleKey];
    
    const newArticles = [...articles];

    newArticles[rowIndex].columns[colIndex] = {
        ...newArticles[rowIndex].columns[colIndex],
        isDeleted: true
    };

    return newArticles;
}

const updateArticlesOnRestore = (state, articleKey) => {
    const { articles, articlesLinksMap } = state;
    
    const { rowIndex, colIndex } = articlesLinksMap[articleKey];
    
    const newArticles = [...articles];

    newArticles[rowIndex].columns[colIndex] = {
        ...newArticles[rowIndex].columns[colIndex],
        isDeleted: false
    };

    return newArticles;
}


export const reducer = (state, action) => {
    const newState = state ? { ...state } : { ...initialState };

    switch (action.type) {
        case SET_ARTICLES:
            newState.articles = action.articles;
            newState.articlesLinksMap = reduceLinksMapping(action.articles);
            break;
        case SET_ARTICLES_LOADER:
            newState.articlesLoader = action.articlesLoader;
            break;
        case EDIT_ARTICLE:
            newState.articles = updateArticlesOnEdit(state, action);
            break;
        case DELETE_ARTICLE:
            newState.articles = updateArticlesOnDelete(state, action.articleKey);
            break;
        case RESTORE_ARTICLE:
            newState.articles = updateArticlesOnRestore(state, action.articleKey);
            break;
        default:
            return newState;
    }

    return newState;
};
