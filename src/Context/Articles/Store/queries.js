import api from '@API/api';

const articlesExternalUrl = 'https://storage.googleapis.com/aller-structure-task/test_data.json';

export const getArticles = () => {
    const baseObj = {
        url: articlesExternalUrl,
        data: {}
    };
    console.log('baseObj',baseObj)
    return api.get(baseObj);
};
