import {
    SET_ARTICLES,
    SET_ARTICLES_LOADER,
} from './constants';


export const initialState = {
    articles: [],
    articlesLoader: false
};


export const reducer = (state, action) => {
    const newState = state ? { ...state } : { ...initialState };

    switch (action.type) {
        case SET_ARTICLES:
            newState.articles = action.articles;
            break;
        case SET_ARTICLES_LOADER:
            newState.articlesLoader = action.articlesLoader;
            break;
        default:
            return newState;
    }

    return newState;
};
