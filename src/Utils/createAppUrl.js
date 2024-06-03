export const createAppUrl = url => {
  if (!url) return url;
  const link =
    '/' +
    url
      .split('/')
      .slice(-3)
      .join('/');
  return link;
};
