import { createContext, useContext } from "react";
import {
  iAdminProvider,
  iAdminContextProps,
  iUser,
  iDepartment,
} from "./interfaces";
import { UserContext } from "../user";
import api from "../../services/api";

const AdminContext = createContext({} as iAdminContextProps);

const AdminProvider = ({ children }: iAdminProvider) => {
  const { listAllCompanies } = useContext(UserContext);

  const listAllUsers = async (token: string): Promise<void | iUser[]> => {
    try {
      const response = await api.get("/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listAllDepartments = async (
    token: string
  ): Promise<void | iDepartment[]> => {
    try {
      const response = await api.get("/departmens", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const listAllDepartmentsByCompanie = async (
    token: string,
    idCompanie: number
  ): Promise<void | iDepartment[]> => {
    try {
      const response = await api.get(`/departments/${idCompanie}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        listAllDepartments,
        listAllDepartmentsByCompanie,
        listAllUsers,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminProvider, AdminContext };
