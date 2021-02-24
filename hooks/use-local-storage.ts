import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: Function | string) => void] {
  const [storedValue, setStoredValue] = useState(initialValue);

  async function setValue(value: Function | string) {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      await AsyncStorage.setItem(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  }

  // @ts-ignore
  async function getValue() {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ?? initialValue;

      setStoredValue(value);
    } catch (error) {
      return initialValue;
    }
  }

  useEffect(() => {
    getValue();
  }, []);

  return [storedValue as string, setValue];
}
