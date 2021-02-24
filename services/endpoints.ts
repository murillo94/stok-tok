import { HTTPMethods } from 'typings/request';

export const endpoints = {
  [HTTPMethods.GET]: {
    sofa: {
      sofas: {
        request: {
          url: 'moveis/sofas/sofas',
        },
      },
      chaise: {
        request: {
          url: 'moveis/sofas/chaise-longue',
        },
      },
    },
    office: {
      cabinets: {
        request: {
          url: 'moveis-office/armarios',
        },
      },
      shelves: {
        request: {
          url: 'moveis-office/estantes',
        },
      },
    },
    closet: {
      closets: {
        request: {
          url: 'moveis/armarios/guarda-roupas',
        },
      },
      boxes: {
        request: {
          url: 'moveis/armarios/baus',
        },
      },
    },
    chairs: {
      office: {
        request: {
          url: 'moveis/bancos-e-cadeiras/cadeiras-de-escritorio',
        },
      },
      benches: {
        request: {
          url: 'moveis/bancos-e-cadeiras/bancos',
        },
      },
    },
  },
};
