import React, { useContext } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
import { Home } from "./Home.jsx";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Shop } from "./Shop.jsx";
import { Product } from "./Product.jsx";
import { Contact } from "./Contact.jsx";
import { Signin } from "./Signin.jsx";
import { Cart } from "./Cart.jsx";
import { useSelector } from "react-redux";
import { Login } from "./Login.jsx";
import { useState } from "react";

export const loginContext = React.createContext();

function Layout({ children }) {
  const {loginUser, setLoginUser} = useContext(loginContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hideHeaderFooterRoutes = ["/signin", "/login"];
  if(!loginUser && !hideHeaderFooterRoutes.includes(location.pathname)){
    return(
      <Signin/>
    )
  }
  return (
    <>
      {!hideHeaderFooterRoutes.includes(location.pathname) && <Header />}

      {children}

      {!hideHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  const [loginUser, setLoginUser] = useState('');
  
  return (
    <loginContext.Provider value={{ loginUser, setLoginUser }}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </loginContext.Provider>
  );
}

export default App;
