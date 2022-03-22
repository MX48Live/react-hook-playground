import useLocalStorage from "./hooks/useLocalStorage"

function CustomHook2() {
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])
    const onSubmit = (e) => {
        e.preventDefault()
        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }

        setTasks([...tasks, taskObj])

    }
    return (
        <div>
            <form onSubmit={onSubmit} action="" className="w-50">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Task</label>
                    <input type="text" value={task} className="form-control" onChange={(e) => setTask(e.target.value)} />
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <hr />
            {tasks.map((task) => (
                <p key={task.date}>{task.task}</p>
            ))}
        </div>
    )
}

export default CustomHook2
