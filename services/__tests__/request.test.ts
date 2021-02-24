jest.mock('node-fetch');

import fetch from 'node-fetch';

import { request, endpoints } from 'services';

import { HTTPMethods } from 'typings/request';

const { Response } = jest.requireActual('node-fetch');

describe('request', () => {
  it('will return default method', async () => {
    // @ts-ignore
    fetch.mockReturnValue(
      Promise.resolve(new Response(JSON.stringify({ id: 10, name: 'Chaise' })))
    );

    await request(endpoints.GET.furniture.chair.request.url);

    expect(fetch).toHaveBeenCalledWith(
      'https://www.tokstok.com.br/api/catalog_system/pub/products/search/moveis/bancos-e-cadeiras',
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
      endpoints.GET.furniture.chair.request.url,
      HTTPMethods.GET
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://www.tokstok.com.br/api/catalog_system/pub/products/search/moveis/bancos-e-cadeiras',
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
      endpoints.GET.furniture.chair.request.url,
      HTTPMethods.GET
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://www.tokstok.com.br/api/catalog_system/pub/products/search/moveis/bancos-e-cadeiras',
      {
        method: HTTPMethods.GET,
      }
    );
    expect(response).toHaveProperty('message');
  });
});
