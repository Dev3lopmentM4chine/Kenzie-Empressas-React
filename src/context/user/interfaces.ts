interface iUserContextProps {
  login: (data: iLogin) => void;
  register: (data: iRegister) => void;
}

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iLogin {
  email: string;
  password: string;
}

interface iRegister extends iLogin {
  name: string;
}
