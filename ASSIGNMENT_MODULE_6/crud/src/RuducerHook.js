import { useReducer } from "react";

let val = {count: 3};
export default function ReducerHook(){
    
    function fun(state, action){
        if( action.type == 'inc'){
            return {count: state.count + 1};
        }

        if( action.type == 'dec') {
            return { count: state.count - 1};
        }
    }

    const [state, dispatch] = useReducer(fun, val);

    return (
        <>
        <div className="container">
            <button onClick={()=>{dispatch({type:'dec'})}}>-</button>
            {state.count}
            <button onClick={()=>{dispatch({type:'inc'})}}>+</button>
        </div>
        </>
    )

}