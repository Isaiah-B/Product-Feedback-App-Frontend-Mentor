import axios, { AxiosInstance } from 'axios';

import { checkError } from '../utils';

class Api {
  userToken: string | null;
  baseUrl: string;
  client: AxiosInstance | null;

  constructor() {
    this.userToken = null;
    this.client = null;
    this.baseUrl = `${process.env.REACT_APP_API_URL}`;
  }

  init = () => {
    this.userToken = localStorage.getItem('feedback-token');

    const headers = {
      Accept: 'application/json',
      Authorization: `${this.userToken ? `Bearer ${this.userToken}` : ''}`,
    };

    this.client = axios.create({
      baseURL: this.baseUrl,
      timeout: 5000,
      headers,
    });

    return this.client;
  };

  get = (endpoint: string) => (
    this.init().get(endpoint)
      .then((res) => res.data)
      .catch((err: unknown) => checkError(err))
  );

  post = (endpoint: string = '', data: unknown = null) => (
    this.init().post(endpoint, data)
      .then((res) => res.data)
      .catch((err: unknown) => checkError(err))
  );

  patch = (endpoint: string, data: unknown = null) => (
    this.init().patch(endpoint, data)
      .then((res) => res.data)
      .catch((err: unknown) => checkError(err))
  );

  delete = (endpoint: string) => (
    this.init().delete(endpoint)
      .then((res) => res.data)
      .catch((err: unknown) => checkError(err))
  );
}

export default Api;
