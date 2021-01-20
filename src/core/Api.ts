import axios, {AxiosRequestConfig} from "axios";

interface FetchApiProps extends AxiosRequestConfig {
  baseUrl?: string;
  withBearer?: boolean;
  customHeaders?: object;
  fullUrl?: string;
}

export async function fetchApi({
  baseUrl = `${
    process.env.NEXT_PUBLIC_ENABLED_LOCAL_EMULATORS_SETUP == "true"
      ? process.env.NEXT_PUBLIC_DEV_URL
      : process.env.NEXT_PUBLIC_PROD_FUNCTIONS_URL
  }`,
  method,
  url,
  data = null,
  headers = {},
  customHeaders = {},
  fullUrl,
  ...restProps
}: FetchApiProps) {
  let config = {
    method: method,
    url: fullUrl ? fullUrl : `${baseUrl}${url}`,
    data: data,
  };

  const defaultHeaders = {
    Accept: "application/json",
  };

  let jointHeaders = null;

  jointHeaders = {
    headers: {
      ...defaultHeaders,
      ...headers,
      ...customHeaders,
    },
  };

  try {
    return axios({
      ...config,
      ...jointHeaders,
      ...restProps,
    });
  } catch (error) {
    return error;
  }
}
