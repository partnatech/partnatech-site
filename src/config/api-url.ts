export const API_URL =
  process.env.NODE_ENV === "development"
    ? `${process.env.STRAPI_BASE_URL_DEV}`
    : `${process.env.STRAPI_BASE_URL_PROD}`;
