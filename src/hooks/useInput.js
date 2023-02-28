import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
  }

  return { value, handleInputChange };
}
