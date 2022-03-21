import { useRef, useEffect, useState } from "react"

export default function UseRef2() {
    const [name, setName] = useState('')
    const renders = useRef(1)
    const prevName = useRef('')
    
    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    },[name])
    return (
    <div>
            <h1>Renders: {renders.current}</h1>
            <h2>PrevName State: {prevName.current}</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" />
    </div>
  )
}
