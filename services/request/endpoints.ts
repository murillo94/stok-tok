import { HTTPMethods } from '../../typings/request';

const endpoints = {
  [HTTPMethods.GET]: {
    sofa: {
      sofas: {
        request: {
          url: 'sofas/sofas',
        },
      },
      chaise: {
        request: {
          url: 'sofas/chaise-longue',
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
          url: 'armarios/guarda-roupas',
        },
      },
      boxes: {
        request: {
          url: 'armarios/baus',
        },
      },
    },
    chairs: {
      office: {
        request: {
          url: 'bancos-e-cadeiras/cadeiras-de-escritorio',
        },
      },
      benches: {
        request: {
          url: 'bancos-e-cadeiras/bancos',
        },
      },
    },
  },
};

export default endpoints;
