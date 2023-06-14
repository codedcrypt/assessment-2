import React from 'react'

const input = (props) => {
  return (
    <div className='yes' >
       <input type="text" placeholder='Enter Your Text Here......' onChange={props.change} />
       </div>
  )
}

export default input
