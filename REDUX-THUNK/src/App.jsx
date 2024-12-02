import "./App.css";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Register } from "./Register";
import { Edit } from "./Edit";

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
