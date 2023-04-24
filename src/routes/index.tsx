import { Route, Routes } from "react-router-dom";
import Admin from "../pages/admin";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import User from "../pages/user";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default RoutesMain;
