import { useContext } from 'react';
import { articlesStore } from '../ArticlesContext';

export const useArticlesContext = () => useContext(articlesStore);

export default useArticlesContext;
