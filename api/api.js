import axios from "axios";
import {ApiInformation} from "../utils/constants";

export const createApi = () => {
  const api = axios.create({
    baseURL: ApiInformation.BASE_URL,
    timeout: ApiInformation.TIMEOUT,
    withCredentials: ApiInformation.withCredentials
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    throw err;
  }

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}
