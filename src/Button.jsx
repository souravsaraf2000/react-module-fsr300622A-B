import React from 'react'
import { useNavigate } from 'react-router-dom'

function Button() {

    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate('/')}>Home Page</button>
    </div>
  )
}

export default Button