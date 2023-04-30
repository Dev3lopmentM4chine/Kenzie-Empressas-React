interface iAdminContextProps {
  listAllDepartments: (token: string) => Promise<void | iDepartment[]>;
  listAllDepartmentsByCompanie: (
    token: string,
    idCompanie: number
  ) => Promise<void | iDepartment[]>;
  listAllUsers: (token: string) => Promise<void | iUser[]>;
}

interface iAdminProvider {
  children: React.ReactNode;
}

interface iUser {
  uuid: string;
  username: string;
  email: string;
  password: string;
  professional_level: string;
  kind_of_work: string;
  is_admin: boolean;
  department_uuid: string;
}

interface iDepartment {
  uuid: string;
  name: string;
  description: string;
  company_uuid: string;
}

export { iAdminProvider, iAdminContextProps, iUser, iDepartment };
