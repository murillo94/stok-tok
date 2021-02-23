import fetch from 'node-fetch';

import Config from '../../config/env';

import { HTTPMethods } from '../../typings/request';

const DEFAULT_MESSAGE_ERROR =
  'Ops! Ocorreu um problema inesperado, tente novamente mais tarde!';

export default async function request(endpoint: string, method: HTTPMethods) {
  try {
    const response = await fetch(`${Config.API_HOST}${endpoint}`, {
      method,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return {
      message: DEFAULT_MESSAGE_ERROR,
    };
  }
}
