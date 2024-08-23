import userEvent from "@testing-library/user-event";
import { useState } from "react"

export default function Count(){

    let [state, setState] = useState(10);

    function inc(){
        setState(state + 1);
    }
    function dec(){
        setState(state - 1);
    }

    return(
        <div>
            <button onClick={inc}>
                +
            </button>
            <h3>
                {state}
            </h3>
            <button onClick={dec}>
                - 
            </button>
        </div>
    )
}