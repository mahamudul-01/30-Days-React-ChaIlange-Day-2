import { useEffect, useState } from "react";

export default function Users(){
    const [users,setUsers]=useState([])

    // fetch data and use useEffect
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUsers(data))
    },[])
    return (
        <div>
            Users= {users.length}
        </div>
    )
}

