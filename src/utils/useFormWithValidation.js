import { useState, useCallback } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../context/context";
import { useLocation } from "react-router-dom";

export function useFormWithValidation() {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    if (location.pathname === "/signup" || "/signin") {
      setIsValid(target.closest("form").checkValidity());
    } else {
      if (
        currentUser.name ===
          target.closest("form").getElementsByTagName("input").name.value &&
        currentUser.email ===
          target.closest("form").getElementsByTagName("input").email.value
      ) {
        setIsValid(false);
      } else {
        setIsValid(target.closest("form").checkValidity());
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
