import { renderHook, act } from '@testing-library/react'; // Hypothetical import based on instruction
import useToggle from '@/hooks/useToggle';

test('should toggle the value', () => {
   const { result } = renderHook(() => useToggle());

   // Initial value is false
   expect(result.current[0]).toBe(false);

   // Toggle to true
   act(() => {
      result.current[1]();
   });

   expect(result.current[0]).toBe(true);

   // Toggle back to false
   act(() => {
      result.current[1]();
   });

   expect(result.current[0]).toBe(false);
});
