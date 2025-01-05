import './friends.css'

export default function Friend ({friend,idx}){
    const {name,email}=friend
    return (
        <div 
        
        className="box-friend">
            <h5 style={{textAlign:'left', fontWeight:'bold'}}>{idx+1}</h5>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            
        </div>
    )
}