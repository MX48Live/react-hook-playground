import { useState, useEffect, useRef } from 'react'

function Todo() {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})
    const isMounted = useRef(true)

    useEffect(() => {
        setTimeout(() => {
            if (isMounted.current) {
                setTodo('Fix Memory Leak issue when async working on mounted component')
                setLoading(false)
            }
        }, 3000)
        return () => {
            isMounted.current = false
        }
    },[isMounted])
    return loading ? <p>Loading....</p> : <p>{todo}</p>
}

export default Todo
