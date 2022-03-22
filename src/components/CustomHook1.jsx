import useFetch from "./hooks/useFetch"

function CustomHook1() {
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts', {})
    console.log(data)
    if (loading) {
        return <h3>Loading....</h3>
    }
  return (
      <div>{data.map((item, index) => (
          <h3 key={item.id}>>{item.title}</h3>
    ))}</div>
  )
}

export default CustomHook1
