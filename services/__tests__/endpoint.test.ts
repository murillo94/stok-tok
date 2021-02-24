import { endpoints } from 'services';

describe('endpoints', () => {
  describe('get', () => {
    it('will return the correct request sofas url', () => {
      expect(endpoints.GET.furniture.sofas.request).toEqual({
        url: 'moveis/sofas',
      });
    });

    it('will return the correct request chair url', () => {
      expect(endpoints.GET.furniture.chair.request).toEqual({
        url: 'moveis/bancos-e-cadeiras',
      });
    });

    it('will return the correct request cabinets url', () => {
      expect(endpoints.GET.furniture.cabinets.request).toEqual({
        url: 'moveis/armarios',
      });
    });

    it('will return the correct request shelves url', () => {
      expect(endpoints.GET.furniture.shelves.request).toEqual({
        url: 'moveis/estante-e-racks',
      });
    });

    it('will return the correct request tables url', () => {
      expect(endpoints.GET.furniture.tables.request).toEqual({
        url: 'moveis/mesas',
      });
    });

    it('will return the correct request bed url', () => {
      expect(endpoints.GET.accessories.bed.request).toEqual({
        url: 'acessorios/cama',
      });
    });

    it('will return the correct request table url', () => {
      expect(endpoints.GET.accessories.table.request).toEqual({
        url: 'acessorios/mesa',
      });
    });

    it('will return the correct request kitchen url', () => {
      expect(endpoints.GET.accessories.kitchen.request).toEqual({
        url: 'acessorios/cozinha',
      });
    });

    it('will return the correct request decoration url', () => {
      expect(endpoints.GET.accessories.decoration.request).toEqual({
        url: 'acessorios/decoracao',
      });
    });
  });
});
