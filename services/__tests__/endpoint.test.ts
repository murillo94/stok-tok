import { endpoints } from 'services';

describe('endpoints', () => {
  describe('get', () => {
    it('will return the correct request sofas url', () => {
      expect(endpoints.GET.sofa.sofas.request).toEqual({
        url: 'moveis/sofas/sofas',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.sofa.chaise.request).toEqual({
        url: 'moveis/sofas/chaise-longue',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.office.cabinets.request).toEqual({
        url: 'moveis-office/armarios',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.office.shelves.request).toEqual({
        url: 'moveis-office/estantes',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.closet.closets.request).toEqual({
        url: 'moveis/armarios/guarda-roupas',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.closet.boxes.request).toEqual({
        url: 'moveis/armarios/baus',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.chairs.office.request).toEqual({
        url: 'moveis/bancos-e-cadeiras/cadeiras-de-escritorio',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.chairs.benches.request).toEqual({
        url: 'moveis/bancos-e-cadeiras/bancos',
      });
    });
  });
});
