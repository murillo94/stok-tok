import { renderHook, act } from '@testing-library/react-hooks';

import { useGrid } from 'hooks';

describe('use-grid', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useGrid());

    expect(result.current.numColumns).toBe(2);
    expect(result.current.keyGrid).toBe(1);
  });

  test('should return one columns and key', () => {
    const { result } = renderHook(() => useGrid());

    act(() => {
      result.current.handleColumn();
    });

    expect(result.current.numColumns).toBe(1);
    expect(result.current.keyGrid).toBe(2);
  });
});
