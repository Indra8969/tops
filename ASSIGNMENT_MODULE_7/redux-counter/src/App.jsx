import { useDispatch, useSelector } from "react-redux";
import { change } from "./reducer";

function App() {
  const value = useSelector(state=>state.count);
  const dispatch = useDispatch(); 
  return (
    <>
      <div>
        <h1>hello redux</h1>
        <button onClick={()=>{dispatch(change({value: value+1}))}}>Increament</button>
        <p>{value}</p>
        <button onClick={()=>{dispatch(change({value: value -1}))}}>decreament</button>
      </div>
    </>
  )
}

export default App
