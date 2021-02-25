import { API_BASE } from '@env';

import { HTTPMethods } from 'types/request';

const DEFAULT_MESSAGE_ERROR =
  'Ops! Ocorreu um problema inesperado, tente novamente mais tarde!';

export async function request<T>(
  endpoint: string,
  method?: HTTPMethods
): Promise<T | { message: Error }> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
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
