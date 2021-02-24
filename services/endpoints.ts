import { HTTPMethods } from 'types/request';

export const endpoints = {
  [HTTPMethods.GET]: {
    furniture: {
      sofas: {
        request: {
          url: 'moveis/sofas',
        },
      },
      chair: {
        request: {
          url: 'moveis/bancos-e-cadeiras',
        },
      },
      cabinets: {
        request: {
          url: 'moveis/armarios',
        },
      },
      shelves: {
        request: {
          url: 'moveis/estante-e-racks',
        },
      },
      tables: {
        request: {
          url: 'moveis/mesas',
        },
      },
    },
    accessories: {
      bed: {
        request: {
          url: 'acessorios/cama',
        },
      },
      table: {
        request: {
          url: 'acessorios/mesa',
        },
      },
      kitchen: {
        request: {
          url: 'acessorios/cozinha',
        },
      },
      decoration: {
        request: {
          url: 'acessorios/decoracao',
        },
      },
    },
  },
};
