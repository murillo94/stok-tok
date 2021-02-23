import { endpoints } from '../../index';

describe('endpoints', () => {
  describe('get', () => {
    it('will return the correct request sofas url', () => {
      expect(endpoints.GET.sofa.sofas.request).toEqual({
        url: 'sofas/sofas',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.sofa.chaise.request).toEqual({
        url: 'sofas/chaise-longue',
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
        url: 'armarios/guarda-roupas',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.closet.boxes.request).toEqual({
        url: 'armarios/baus',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.chairs.office.request).toEqual({
        url: 'bancos-e-cadeiras/cadeiras-de-escritorio',
      });
    });

    it('will return the correct request chaise url', () => {
      expect(endpoints.GET.chairs.benches.request).toEqual({
        url: 'bancos-e-cadeiras/bancos',
      });
    });
  });
});
