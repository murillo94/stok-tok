import {
  getResponsiveHeight,
  getResponsiveWidth,
  getResponsiveFontSize,
} from 'utils';

describe('dimensions', () => {
  it('will return typeof number', () => {
    expect(typeof getResponsiveHeight(2)).toBe('number');
    expect(getResponsiveHeight(2)).toBe(26.68);
  });

  it('will return typeof number', () => {
    expect(typeof getResponsiveWidth(2)).toBe('number');
    expect(getResponsiveWidth(2)).toBe(15);
  });

  it('will return typeof number', () => {
    expect(typeof getResponsiveFontSize(2)).toBe('number');
    expect(getResponsiveFontSize(2)).toBe(30.595932917809698);
  });
});
