import { useState } from 'react';

interface useGrid {
  handleColumn: () => void;
  numColumns: number;
  keyGrid: number;
}

export function useGrid(): useGrid {
  const [isColumn, setIsColumn] = useState<boolean>(true);
  const [keyGrid, setKeyGrid] = useState<number>(1);
  const numColumns = isColumn ? 2 : 1;

  function handleColumn(): void {
    setIsColumn(!isColumn);
    setKeyGrid(keyGrid + 1);
  }

  return { handleColumn, numColumns, keyGrid };
}
