import { useState } from "react";

 const useInput = (name) => {
  const [value, setValue] = useState("");
  const onChange = ({ target: { value } }) => setValue(value);

  console.log( value, onChange, name);

  return { value, onChange, name };
};

export default useInput