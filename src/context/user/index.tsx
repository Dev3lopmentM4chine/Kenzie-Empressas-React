import { createContext, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserContext = createContext({} as iUserContextProps);

const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const login = async (data: iLogin) => {
    try {
      const response = await api.post("auth/login", data);
      localStorage.setItem("@acessToken", response.data.acessToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos!");
    }
  };

  const register = async (data: iRegister) => {
    try {
        const response = await api.post("auth/register", data)
        toast.success("Conta criada com sucesso!")
        setTimeout(() => {
            navigate("/login")
        }, 1000)
    } catch (error) {
        console.log(error)
        toast.error("Verifique os campos!")
    }
};

  return (
    <UserContext.Provider
      value={{
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
