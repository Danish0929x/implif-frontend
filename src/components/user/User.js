import React from 'react'
import {Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function User() {
  return (
    <>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </>
  )
}

export default User
