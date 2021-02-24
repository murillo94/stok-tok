jest.mock('node-fetch');

import fetch from 'node-fetch';

import { request, endpoints } from '../index';

import { HTTPMethods } from '../../typings/request';

const { Response } = jest.requireActual('node-fetch');

describe('request', () => {
  it('will return default method', async () => {
    const response = await request(endpoints.GET.sofa.chaise.request.url);

    expect(fetch).toHaveBeenCalledWith(
      'https://www.tokstok.com.br/api/catalog_system/pub/products/search/moveis/sofas/chaise-longue',
      {
        method: HTTPMethods.GET,
      }
    );
  });

  it('will return the correct request data', async () => {
    // @ts-ignore
    fetch.mockReturnValue(
      Promise.resolve(new Response(JSON.stringify({ id: 10, name: 'Chaise' })))
    );

    const response = await request(
      endpoints.GET.sofa.chaise.request.url,
      HTTPMethods.GET
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://www.tokstok.com.br/api/catalog_system/pub/products/search/moveis/sofas/chaise-longue',
      {
        method: HTTPMethods.GET,
      }
    );
    expect(response).toStrictEqual({ id: 10, name: 'Chaise' });
  });

  it('will return the fail request data', async () => {
    // @ts-ignore
    fetch.mockReturnValue(Promise.resolve(new Response('error')));

    const response = await request(
      endpoints.GET.sofa.chaise.request.url,
      HTTPMethods.GET
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://www.tokstok.com.br/api/catalog_system/pub/products/search/moveis/sofas/chaise-longue',
      {
        method: HTTPMethods.GET,
      }
    );
    expect(response).toStrictEqual({
      message:
        'Ops! Ocorreu um problema inesperado, tente novamente mais tarde!',
    });
  });
});
