import { useFetch } from "#app";

type useFetchType = typeof useFetch;

export const useFetchAPI: useFetchType = (path, options = {}) => {
  // const baseAPIUrl = useRuntimeConfig().public.BaseApiUrl

  const baseApiUrl = "https://api.zentlemen.vn/";
  options.baseURL = baseApiUrl;
  options.headers = {
    ...options.headers,
    Authorization: `Bearer`,
  };

  return useFetch(path, options);
};
