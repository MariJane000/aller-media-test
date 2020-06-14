import { useArticlesContext } from './useArticlesContext';
import { getArticles } from '../Store/queries';
import { setArticles, setArticlesLoader } from '../Store/actions';
import { get } from 'lodash';

export const useGetArticles = () => {
  const {
    state: { articles, articlesLinksMap, articlesLoader },
    dispatch,
  } = useArticlesContext();

  const getArticlesRequest = () => {
    dispatch(setArticlesLoader(true));

    getArticles()
      .then((response) => {
        const articles = get(response, 'data[0]', []);
        dispatch(setArticlesLoader(false));
        dispatch(setArticles(articles));
      })
      .catch(() => {
        dispatch(setArticlesLoader(false));
      });
  };

  return {
    articles,
    articlesLoader,
    articlesLinksMap,
    getArticles: getArticlesRequest,
  };
};

export default useGetArticles;
