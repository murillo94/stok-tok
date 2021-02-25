beforeEach(() => {
  //@ts-ignore
  fetch.resetMocks();
});

import { request, endpoints } from 'services';

import { HTTPMethods } from 'types/request';

const { Response } = jest.requireActual('node-fetch');

const fetchMockValue = (value: any) =>
  //@ts-ignore
  fetch.mockReturnValue(Promise.resolve(new Response(value)));

describe('request', () => {
  it('will return default method', async () => {
    await request(endpoints.GET.furniture.chair.request.url);
    fetchMockValue(JSON.stringify({ id: 10, name: 'Chaise' }));

    expect(fetch).toHaveBeenCalledWith(
      'https://gist.githubusercontent.com/murillo94/3bcd0404f3681263f3b47f456d81c0ed/raw/703adea15031a4654e62730ab71dc07c709ea0ea/moveis-bancos-e-cadeiras',
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
      'https://gist.githubusercontent.com/murillo94/3bcd0404f3681263f3b47f456d81c0ed/raw/703adea15031a4654e62730ab71dc07c709ea0ea/moveis-bancos-e-cadeiras',
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
      'https://gist.githubusercontent.com/murillo94/3bcd0404f3681263f3b47f456d81c0ed/raw/703adea15031a4654e62730ab71dc07c709ea0ea/moveis-bancos-e-cadeiras',
      {
        method: HTTPMethods.GET,
      }
    );
    expect(response).toHaveProperty('message');
  });
});
