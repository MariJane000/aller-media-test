import api from '@API/api';

const articlesExternalUrl =
  'https://storage.googleapis.com/aller-structure-task/test_data.json';

export const getArticles = () => {
  const baseObj = {
    url: articlesExternalUrl,
    data: {},
  };

  return api.get(baseObj);
};
