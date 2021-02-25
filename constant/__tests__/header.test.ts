import { header } from 'constant';

describe('colors', () => {
  it('should return object colors', () => {
    expect(header).toStrictEqual({
      style: {
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerTintColor: '#414141',
      },
    });
  });
});
