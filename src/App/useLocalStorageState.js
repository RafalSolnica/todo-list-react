import { useState, useEffect } from "react";

const useLocalStorageState = (keyName, initialValue) => {
  const getInitialState = () =>
    JSON.parse(localStorage.getItem(keyName)) || initialValue;

  const [state, setState] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(state));
  }, [state, keyName]);

  return [state, setState];
};

export default useLocalStorageState;
