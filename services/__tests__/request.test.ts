jest.mock('node-fetch');

import fetch from 'node-fetch';

import { request, endpoints } from 'services';

import { HTTPMethods } from 'typings/request';

const { Response } = jest.requireActual('node-fetch');

const fetchMockValue = (value: any) =>
  //@ts-ignore
  fetch.mockReturnValue(Promise.resolve(new Response(value)));

describe('request', () => {
  it('will return default method', async () => {
    await request(endpoints.GET.furniture.chair.request.url);
    fetchMockValue(JSON.stringify({ id: 10, name: 'Chaise' }));

    expect(fetch).toHaveBeenCalledWith(
      'https://www.tokstok.com.br/api/catalog_system/pub/products/search/moveis/bancos-e-cadeiras',
      {
        method: HTTPMethods.GET,
      }
    );
  });

  it('will return the correct request data', async () => {
    fetchMockValue(JSON.stringify({ id: 10, name: 'Chaise' }));

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
    fetchMockValue('error');

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
