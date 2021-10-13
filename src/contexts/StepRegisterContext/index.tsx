import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type Register = {
  email: string;
  password: string;
  address: {
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
  }
  cpf: string;
  rg: string;
  phone: string;
}

type ValueContext = {
  register: Register;
  setRegister: Dispatch<SetStateAction<Register>>
}

export const StepRegisterContext = createContext<ValueContext | undefined>(undefined);

export const StepRegisterProvider = ({children}: {children: ReactNode}) => {
  const [register, setRegister] = useState<Register>({
    email: "",
    password: "",
    address: {
      street: "",
      number: 0,
      neighborhood: "",
      city: "",
      state: ""
    },
    cpf: "",
    rg: "",
    phone: ""
  })

  return(
    <StepRegisterContext.Provider value={{register, setRegister}}>
      {children}
    </StepRegisterContext.Provider>
  );
}