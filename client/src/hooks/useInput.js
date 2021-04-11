import { useState } from "react";

export const useInput = (name) => {
  const [value, setValue] = useState("");
  const onChange = ({ target: { value } }) => setValue(value);

  console.log("v", value, "oC", onChange, "n", name);

  return { value, onChange, name };
};
