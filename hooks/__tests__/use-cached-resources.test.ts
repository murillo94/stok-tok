import { renderHook } from '@testing-library/react-hooks';

import { useCachedResources } from 'hooks';

describe('use-grid', () => {
  test('should return false when not load cached resource', () => {
    const { result } = renderHook(() => useCachedResources());

    expect(result.current).toBe(false);
  });

  test('should return true when load cached resource', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useCachedResources()
    );

    await waitForNextUpdate();

    expect(result.current).toBe(true);
  });
});
