import {
  SET_ARTICLES,
  SET_ARTICLES_LOADER,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
  RESTORE_ARTICLE,
} from './constants';

export const setArticles = (articles) => ({
  type: SET_ARTICLES,
  articles,
});

export const setArticlesLoader = (articlesLoader) => ({
  type: SET_ARTICLES_LOADER,
  articlesLoader,
});

export const editArticle = (articleKey, articleValues) => ({
  type: EDIT_ARTICLE,
  articleKey,
  articleValues,
});

export const deleteArticle = (articleKey) => ({
  type: DELETE_ARTICLE,
  articleKey,
});

export const restoreArticle = (articleKey) => ({
  type: RESTORE_ARTICLE,
  articleKey,
});
