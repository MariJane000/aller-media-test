export const getElementWidth = (selector) => {
  return document.querySelector(selector)
    ? document.querySelector(selector).offsetWidth
    : 0;
};

export const getContainerWidth = () => {
  return getElementWidth('.page-content');
};
