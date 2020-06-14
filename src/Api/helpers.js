import { BASE_API_URL } from './constants';

export const formatAppUrl = (url) => {
  return `${BASE_API_URL}/${url}`;
};

export const getUrl = (url) => {
  if (url.includes('http')) {
    return url;
  }

  return formatAppUrl(url);
};

export default getUrl;
