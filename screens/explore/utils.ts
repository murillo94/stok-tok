import { endpoints } from 'services';

import { Categorie } from 'types/explore';

export const CATEGORIES_FURNITURE: Categorie[] = [
  {
    name: 'Sofás',
    url: endpoints.GET.furniture.sofas.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-moveis-sofas.jpg',
  },
  {
    name: 'Cadeiras',
    url: endpoints.GET.furniture.chair.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-moveis-bancos-e-cadeiras.jpg',
  },
  {
    name: 'Armários',
    url: endpoints.GET.furniture.cabinets.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-moveis-armarios.jpg',
  },
  {
    name: 'Estantes',
    url: endpoints.GET.furniture.shelves.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-moveis-estante-e-racks.jpg',
  },
  {
    name: 'Mesas',
    url: endpoints.GET.furniture.tables.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-moveis-mesas.jpg',
  },
];

export const CATEGORIES_ACCESSORIES: Categorie[] = [
  {
    name: 'Cama',
    url: endpoints.GET.accessories.bed.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-acessorios-cama.jpg',
  },
  {
    name: 'Mesa',
    url: endpoints.GET.accessories.table.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-acessorios-mesa.jpg',
  },
  {
    name: 'Cozinha',
    url: endpoints.GET.accessories.kitchen.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-acessorios-cozinha.jpg',
  },
  {
    name: 'Decoração',
    url: endpoints.GET.accessories.decoration.request.url,
    imageUrl:
      'https://tokstok.vteximg.com.br/arquivos/desktop-acessorios-decoracao.jpg',
  },
];
