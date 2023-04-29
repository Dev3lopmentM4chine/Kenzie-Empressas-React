interface iUserContextProps {
  login: (data: iLogin) => void;
  register: (data: iRegister) => void;
  validateTypeUser: (token: string) => Promise<boolean | void>;
  listAllSectors: () => Promise<void | iSector[]>;
  listAllCompanies: () => Promise<void | iCompanie[]>;
  listCompaniesBySector: (sector: string) => Promise<void | iCompanie[]>;
}

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iLogin {
  email: string;
  password: string;
}

interface iRegister extends iLogin {
  username: string;
}

interface iSector {
  uuid: string;
  description: string;
}

interface iCompanie {
  uuid: string;
  name: string;
  description: string;
  opening_hours: string;
  sectors: iSector[];
}

export {
  iUserContextProps,
  iUserProviderProps,
  iLogin,
  iRegister,
  iSector,
  iCompanie,
};
