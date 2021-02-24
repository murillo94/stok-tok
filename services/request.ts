import fetch from 'node-fetch';

import Config from 'config/env';

import { HTTPMethods } from 'typings/request';

const DEFAULT_MESSAGE_ERROR =
  'Ops! Ocorreu um problema inesperado, tente novamente mais tarde!';

export async function request<T>(
  endpoint: string,
  method?: HTTPMethods
): Promise<T | { message: Error }> {
  try {
    const response = await fetch(`${Config.API_HOST}${endpoint}`, {
      method: method ?? HTTPMethods.GET,
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return {
      message: new Error(DEFAULT_MESSAGE_ERROR),
    };
  }
}
