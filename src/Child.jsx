import React, { useEffect, useState } from 'react'

function Child() {
// useEffect with No dependency => called on every update in component

// useEffect with Empty Dependency=> called only once during 1st render

// useEffect with dependency => called on updation of dependency list

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    useEffect(()=>{
      console.log('Use Effect Hook called')
    },[count1])
    // useEffect accepts 2 parameters : 1. callBack function 2. Dependency List (Array)
    useEffect(()=>{
        console.log('Component Mounted Successfully')
        return ()=>{
          console.log('Unmounted')
        }
    },[])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <h1>{count1}</h1>
      <button onClick={()=>setCount1(count1 + 1)}>Increment</button>
    </div>
  )
}

export default Child