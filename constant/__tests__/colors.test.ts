import { colors } from 'constant';

describe('colors', () => {
  it('should return object colors', () => {
    expect(colors).toStrictEqual({
      black: '#414141',
      gray: '#d0d0d0',
      green: '#eaf9e4',
      lightGray: '#f6f6f6',
      red: '#ff6666',
      tabIconDefault: '#b1b1b1',
      tabIconSelected: '#009845',
      tint: '#009845',
      white: '#ffffff',
    });
  });
});
