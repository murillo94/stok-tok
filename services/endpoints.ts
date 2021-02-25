import { HTTPMethods } from 'types/request';

export const endpoints = {
  [HTTPMethods.GET]: {
    furniture: {
      sofas: {
        request: {
          url:
            '0b471b71f8a45e83e6877b81f498d800/raw/c15a3cc3630c9b0bcd3dcf276ca43fcff99b83d8/moveis-sofas',
        },
      },
      chair: {
        request: {
          url:
            '3bcd0404f3681263f3b47f456d81c0ed/raw/703adea15031a4654e62730ab71dc07c709ea0ea/moveis-bancos-e-cadeiras',
        },
      },
      cabinets: {
        request: {
          url:
            '63d690990b3cf6f29bebd600ef630008/raw/da97c06e9c93b1bb6f283bc7155bd82844781b24/moveis-armarios',
        },
      },
      shelves: {
        request: {
          url:
            'd79d2c63e94ef82b27b88b127799f196/raw/2f502afee55a6f03a7a97bd6202b47c142c4c1cc/moveis-estante-e-racks',
        },
      },
      tables: {
        request: {
          url:
            'db977bdeabad0f6a1675328bb296c4c7/raw/335861eaef0f2eec094e81e5ca27b6db6aa8f4ef/moveis-mesas',
        },
      },
    },
    accessories: {
      bed: {
        request: {
          url:
            '1e871181448944527a945acefd2d8860/raw/ce44377199972f2e6e878173c276c82146eb8326/acessorios-cama',
        },
      },
      table: {
        request: {
          url:
            'b21f05fc5618e7daba79d18104fd7c43/raw/522233e82c0a629d74389ca9e10e81be43cefb1e/acessorios-mesa',
        },
      },
      kitchen: {
        request: {
          url:
            'c2f2cf166c540d980fa1d174c4722325/raw/17f9b47cf327500a047ef78b293f329be9d9ed92/acessorios-cozinha',
        },
      },
      decoration: {
        request: {
          url:
            '575277f57adacc52288de02783fc5ae3/raw/1e354e96d77747a86e448db36440c0bf0141a34a/acessorios-decoracao',
        },
      },
    },
  },
};
