import { createContext, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  iCompanie,
  iLogin,
  iRegister,
  iSector,
  iUserContextProps,
  iUserProviderProps,
} from "./interfaces";

const UserContext = createContext({} as iUserContextProps);

const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const validateTypeUser = async (token: string): Promise<boolean | void> => {
    try {
      const response = await api.get("auth/validate_user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      if (!response.data.is_admin) {
        return false;
      }

      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data: iLogin): Promise<void> => {
    try {
      const response = await api.post("auth/login", data);

      const token = response.data.token;
      localStorage.setItem("@acessToken", JSON.stringify(token));

      const isAdmin: boolean | void = await validateTypeUser(token);

      if (isAdmin) {
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      }

      setTimeout(() => {
        navigate("/user");
      }, 1000);
    } catch (error) {
      console.log(error);

      toast.error("Email ou senha incorretos!");
    }
  };

  const register = async (data: iRegister): Promise<void> => {
    try {
      const response = await api.post("auth/register", data);
      toast.success("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Verifique os campos!");
    }
  };

  const listAllCompanies = async (): Promise<void | iCompanie[]> => {
    try {
      const response = await api.get("/companies");

      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listAllSectors = async (): Promise<void | iSector[]> => {
    try {
      const response = await api.get("/sectors");
      
      if(response.status == 200){
        return response.data
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listCompaniesBySector = async (
    sector: string
  ): Promise<void | iCompanie[]> => {
    try {
      const response = await api.get(`/companies/${sector}`);

      if(response.status == 200){
        return response.data
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        register,
        validateTypeUser,
        listAllCompanies,
        listAllSectors,
        listCompaniesBySector,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
