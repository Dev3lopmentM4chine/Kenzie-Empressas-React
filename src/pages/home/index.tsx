import { useContext } from "react";
import { UserContext } from "../../context/user";
import { iLogin, iRegister } from "../../context/user/interfaces";

const Home = () => {
  const { listAllCompanies, listAllSectors, listCompaniesBySector } =
    useContext(UserContext);
    
  return (
    <>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
