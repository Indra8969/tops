import './App.css';
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { About } from "./About";
import { Skills } from "./Skills";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('');
  const handleTheme = ()=>{
    (theme == 'dark') ? setTheme('white') :setTheme('dark');
  }
  return (
    <>
    <div className={`theme ${theme}`}>
      <BrowserRouter>
        <Header handleTheme={handleTheme}></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/skills" element={<Skills></Skills>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
