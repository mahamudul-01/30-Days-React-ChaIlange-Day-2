
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'

function App() {

  const handleButton1=()=>{
    alert('Button 1 clicked')
  }
  const handleButton2=(num)=>{
    alert(num+5)
  }

  return (
    <>
      <h2> Explore React Concepts 2</h2>
      <button onClick={handleButton1}> Button 1</button>
      <br />
      {/* handle parameter event */}
      <button onClick={()=> handleButton2(5)} >Button to add 5</button>
      <hr />
      <h1>Use State</h1>
      <Counter></Counter>

    {/* fetch data */}
    <hr />
      <h1>Fetch Data using useEffect</h1>
      <Users></Users>
      <hr />
      <Friends></Friends>

    </>
  )
}

export default App
