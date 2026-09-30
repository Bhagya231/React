import { useState } from "react";

export function useInput(defaultValue, validationFn)
{
    const [enteredValue, setEnteredvalue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const  valueIsValid = validationFn(enteredValue);

   function handleInputChange(event)
  {
    setEnteredvalue(event.target.value);
    setDidEdit(false);
  }

  function handelInputBlur()
  {
    setDidEdit(true);
  }

  return{
    value: enteredValue,
    handleInputChange,
    handelInputBlur,
    hasError: didEdit && !valueIsValid
  }

}