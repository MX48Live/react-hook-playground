import { useRef } from "react"

export default function UseRef1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = "hello"
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = "Good bye world"
  }
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <br />
      <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello World</p>
    </div>
  )
}
