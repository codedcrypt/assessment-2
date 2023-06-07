import React from 'react'
import Input from './component/input'
import Output from './component/output'
import './App.css'

function App() {
  return (
    <div className='container'>
      <div className="wrap">
      <Output/>
      <Input/>
      </div>
    </div>
  )
}

export default App