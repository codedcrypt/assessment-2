import React,{useState} from 'react'
import Output from './component/output'
import Input from './component/input'
import './App.css'

function App() {
  const [username, setUsername] = useState("james")
  
  const changeHandler = (e) => {
    setUsername(e.target.value)
  }


  return (
    <div className='container'>
    <div className='wrap'>
    <Output username="james"/>
    <Output username={username}/>
    <Input change={changeHandler}/>
    </div>
  </div>
  )
}

export default App
