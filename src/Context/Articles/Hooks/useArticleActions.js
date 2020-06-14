import { useArticlesContext } from './useArticlesContext';
import { editArticle, deleteArticle, restoreArticle } from '../Store/actions';

export const useArticleActions = () => {
    const { dispatch } = useArticlesContext();

    const editArticleRequest = (key, values) => { 
        dispatch(editArticle(key, values));
    };

    const deleteArticleRequest = (key) => { 
        dispatch(deleteArticle(key));
    };

    const restoreArticleRequest = (key) => { 
        dispatch(restoreArticle(key));
    };
      
    return {
        editArticle: editArticleRequest,
        deleteArticle: deleteArticleRequest,
        restoreArticle: restoreArticleRequest,
    };
};

export default useArticleActions;
