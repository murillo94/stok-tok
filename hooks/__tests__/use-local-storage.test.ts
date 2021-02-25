import { renderHook, act } from '@testing-library/react-hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useLocalStorage } from 'hooks';

describe('use-local-storage', () => {
  afterEach(() => AsyncStorage.clear());

  test('should set and sget value storage', async () => {
    const { result } = renderHook(() => useLocalStorage('@example', '10'));

    act(() => {
      result.current[1]('10');
    });

    expect(result.current[0]).toBe('10');
  });
});
