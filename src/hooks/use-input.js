import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && inputIsTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
