import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginContext } from "./App";
export const Header = () => {
  const navigate = useNavigate();
  const {loginUser, setLoginUser} = useContext(loginContext);
  useEffect(()=>{
    if(!loginUser) navigate('/signin')
  },[])
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img
                    src="assets/images/logo.png"
                    style={{ width: 158 }}
                  />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li>
                    <NavLink to="/" className={({isActive})=>(isActive ? "active" : "")}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop" className={({isActive})=>(isActive ? "active" : "")}>Our Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({isActive})=>(isActive ? "active" : "")}>Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className={({isActive})=>(isActive ? "active" : "")}>Cart</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={(e)=>{
                      e.preventDefault();
                      setLoginUser('');
                      navigate("/login")
                    }}>Log Out</NavLink>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
