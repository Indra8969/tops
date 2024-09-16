import React, { useState } from "react";
import "./App.css";

function Loginmodel({ setShowlogin }) {
  return (
    <>
      <form id="login">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
          onClick={() => setShowlogin(false)}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <p>Login to my account</p>
        <input type="email" placeholder="Enter Email"/>
        <input type="password" placeholder="Enter Password"/>
        <div>
          <input id="check" type="checkbox" style={{ accentColor: "orange" }} />
          <label htmlFor="check">Remember Me On This Computer</label>
        </div>
        <button>LOGIN</button>
        <a href="#" style={{ color: "orange" }}>
          Forgot Your Password ?{" "}
        </a>
      </form>
    </>
  );
}

function Registermodel({ setShowregister }) {
  return (
    <>
      <form id="register">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
          onClick={() => setShowregister(false)}
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <p>Register</p>
        <input type="email" placeholder="Enter Email"/>
        <input type="password" placeholder="Enter Password"/>
        <div>
          <input id="check" type="checkbox" style={{ accentColor: "orange" }} />
          <label htmlFor="check">Remember Me On This Computer</label>
        </div>
        <button>LOGIN</button>
        <a href="#" style={{ color: "orange" }}>
          Forgot Your Password ?{" "}
        </a>
      </form>
    </>
  );
}

export default function App() {
  const [showlogin, setShowlogin] = useState(false);
  const [showRegister, setShowregister] = useState(false);

  return (
    <>
      <h3>Modal login Form</h3>

      {showlogin ? (
        <Loginmodel setShowlogin={setShowlogin} />
      ) : (
        <button onClick={() => setShowlogin(true)}>Open model</button>
      )}
      <h3>Modal Register Form</h3>
      {showRegister ? (
        <Registermodel setShowregister={setShowregister} />
      ) : (
        <button onClick={() => setShowregister(true)}>Open model</button>
      )}
    </>
  );
}
