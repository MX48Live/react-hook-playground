import Todo from "./Todo"
import { useState } from "react"

function UseRef3() {
    const [showTodo, setShowTodo] = useState(true)
    return (
        <div>
            {showTodo && <Todo />}
            <button className="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
        </div>
    )
}

export default UseRef3
