import { capitalize } from '../index';

describe('dimensions', () => {
  it('will return string normal', () => {
    expect(capitalize('Green Alligator')).toBe('Green Alligator');
  });

  it('will return string capitalized', () => {
    expect(capitalize('GrEEn alliGATOR')).toBe('Green Alligator');
  });
});
