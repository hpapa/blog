import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const { value } = event.target;
    if (value) {
      setValue(value);
    } else {
      setValue("");
    }
  }

  return { value, setValue, onChange };
}

export default useInput; 