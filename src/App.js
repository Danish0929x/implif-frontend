import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/public/login/Login";
import About from "./components/public/about/About";
import Home from "./components/public/Home/Home.js";
import Admin from "./components/admin/Admin";
import User from "./components/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/user/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
