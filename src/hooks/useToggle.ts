import { useState, useCallback } from 'react';

// Custom hook for toggling state
function useToggle(initialValue: boolean = false): [boolean, () => void] {
   const [value, setValue] = useState<boolean>(initialValue);

   const toggle = useCallback(() => {
      setValue((currentValue) => !currentValue);
   }, []);

   return [value, toggle];
}

export default useToggle;
