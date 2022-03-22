import { useState, useEffect, useRef, useMemo } from "react"

function UseMemo() {
  const [number, setNumber] = useState(1)
  const [increment, setIncrement] = useState(0)

  // const  sqrt = getSqrt(number)
  const  sqrt = useMemo(() => getSqrt(number), [number]) 

  const renders = useRef(1)
  useEffect(() => {
    renders.current = renders.current + 1
  })
  const onClick = () => {
    setIncrement((prevState) => {
      return prevState + 1
    })
  }
  return (
    <div>
      <input type="number" name="" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control w-25" />
      <h2 className="my-3">
        The Sqrt of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary" onClick={onClick}>Re-Render</button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i < 10000; i++) {
    console.log(i)
  }
  return Math.sqrt(n)
}

export default UseMemo
