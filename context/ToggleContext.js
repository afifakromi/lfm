import React, { useContext, useState } from "react";
import { createContext } from "react";

const ToggleContext = createContext();
const ToggleUpdateContext = createContext();

export function useOpen() {
  return useContext(ToggleContext);
}

export function useOpenUpdate() {
  return useContext(ToggleUpdateContext);
}

export function ToggleProvider({ children }) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleLogin = () => {
    setLoginOpen(true);
    setRegisterOpen(false);
  };

  const toggleRegister = () => {
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  const optionsOpen = [{ loginOpen, registerOpen }];

  const toggleOpen = [{ toggleLogin, toggleRegister }];

  return (
    <ToggleContext.Provider value={optionsOpen}>
      <ToggleUpdateContext.Provider value={toggleOpen}>
        {children}
      </ToggleUpdateContext.Provider>
    </ToggleContext.Provider>
  );
}
