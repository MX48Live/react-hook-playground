import React, { useState, useCallback } from "react"

function UseCallBack() {
    const [tasks, setTask] = useState([])

    const addTask = useCallback(() => { setTask((prevState) => [...prevState, 'Some Task'])},[setTask])

    return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>
            ))}
        </div>
    )
}

const Button = React.memo(({ addTask }) => {
    console.log('Button Redered')
    return <div><button className="btn btn-primary" onClick={addTask}>Add Task</button></div>
})

export default UseCallBack
