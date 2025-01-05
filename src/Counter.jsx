import { useState } from "react"

export default function Counter(){
    //use state
    const [count,setCount]=useState(0)

    const handleIncrease=()=>{
        const newCount=count +1 
        setCount(newCount)

    }

    const handleDecrease=()=>{
        const newCount=count-1 
        setCount(newCount)
    }

    return(
       <div style={{border:'2px solid blue', padding:'5px', borderRadius:'5px'} }>
         <h2>Counter: {count}</h2>
         <button onClick={handleDecrease}>Decrease</button>
         <button onClick={handleIncrease}>Increase</button>
         
       </div>
    )
}