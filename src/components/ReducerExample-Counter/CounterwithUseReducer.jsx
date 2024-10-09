import "./style.css";
import { useReducer } from "react";
import UserHandler from "./UserHandler";

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        default:
            return state
    }
}

function CounterwithUseReducer() {

    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const handleIncrement = () => {
        dispatch({ type: "increment" })
    }

    const handleDecrement = () => {
        dispatch({ type: "decrement" })
    }

    return (
        <section className="useReducerImplementaion">
            <div>
                <h2>Example 1: Counter with UseReducer</h2>
                <h3>Count:{state.count}</h3>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>

            <div className="logic">
                <ul>
                    <li>useReducer is also used for state management, with better setter functions (dispatch and reducer)</li>
                    <li>4 main terms: state, dispatch, reducer, initialState</li>
                    <li>consider initialState = &lbrace;name: "mann"&rbrace;</li>
                    <li>we can access this initialState value with <code>state.name</code></li>
                    <li>dispatch is a function in which we pass object with type property to be used in action.<br />
                        <code>
                            {'const handleRename = () => {dispatch({ type: "rename" })}'}
                        </code>
                    </li>
                    <li>reducer function: takes in state and action, then switch is applied on action based on types we create case which returns value for state</li>
                </ul>
            </div>
            <div>
                <h2>Example 2:</h2>
                <UserHandler />
            </div>
        </section>
    )
}

export default CounterwithUseReducer