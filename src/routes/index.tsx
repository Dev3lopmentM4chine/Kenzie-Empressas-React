import { Route, Routes } from "react-router-dom";
import Admin from "../pages/admin";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import User from "../pages/user";
import { AdminProvider } from "../context/admin";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/admin"
        element={
          <AdminProvider>
            <Admin />
          </AdminProvider>
        }
      />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default RoutesMain;
