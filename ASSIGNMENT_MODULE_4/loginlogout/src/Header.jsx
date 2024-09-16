import React from "react";
import { Link, Routes, Route } from "react-router-dom";


export const Header = () => {
  return (
    <>
    <div className="header">
      <p>Navigation</p>
      <Routes>
        <Route path="/login" element={<Link to='/logout'>logout</Link>}></Route>
        <Route path="/logout" element={<Link to='/login'>login</Link>}></Route>
      </Routes>
    </div>
    </>
  );
};
