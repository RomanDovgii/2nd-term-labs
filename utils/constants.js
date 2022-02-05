export const ApiRoutes = {
  GET_ARTICLES: `/articles`,
  GET_ARTICLE: `/articles/`,
  GET_COMMENTS: `/articles/{id}/comments`,
  ADD_COMMENT: `/articles/{id}/comments`,
  GET_CATEGORIES: `/categories`,
};

export const ApiInformation = {
  BASE_URL: `http://demo-api.vsdev.space/api`,
  // BASE_URL: `https://44e8-85-249-34-193.ngrok.io/api`,
  TIMEOUT: 50000,
  WITH_CREDENTIALS: false
};
