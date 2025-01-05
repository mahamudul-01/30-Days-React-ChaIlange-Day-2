import { useEffect, useState } from "react"
import './friends.css'
import Friend from "./Friend"

export default function Friends(){

    const [friends,setFriends]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>setFriends(data))
    },[])

    return (
        <div className="box-friends">
            <h1>John have {friends.length} friends</h1>
            {
                friends.map((friend,idx)=> <Friend friend={friend} key={idx} idx={idx} ></Friend>)
            }
        </div>
    )
}