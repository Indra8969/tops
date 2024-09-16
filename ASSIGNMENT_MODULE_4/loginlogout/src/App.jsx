import { Link, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Logout from './Logout'
import { Footer } from './Footer'
import { Header } from './Header'



function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
