import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: Function | string) => void] {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = async (value: Function | string) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      await AsyncStorage.setItem(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ?? initialValue;

        setStoredValue(value);
      } catch (error) {
        return initialValue;
      }
    };
  }, []);

  return [storedValue as string, setValue];
}
