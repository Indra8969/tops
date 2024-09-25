import "./app.css";
import PrimarySearchAppBar from "./Search.jsx";
import BasicButtons from "./Btn.jsx"
import BasicTable from "./Table.jsx"
import {Add} from './Add.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <div className="container">
        <PrimarySearchAppBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BasicTable/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
