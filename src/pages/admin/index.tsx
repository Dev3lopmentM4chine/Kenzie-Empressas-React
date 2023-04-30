import { useContext } from "react";
import { AdminContext } from "../../context/admin";
import { UserContext } from "../../context/user";

const Admin = () => {
  const {} = useContext(AdminContext)
  const {} = useContext(UserContext)

  return (
    <>
      <h1>Admin Page</h1>
    </>
  );
};

export default Admin;
