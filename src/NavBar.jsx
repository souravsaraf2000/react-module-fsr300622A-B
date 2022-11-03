import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', padding: '20px', backgroundColor:'gray'}}>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/about'>About</Link></button>
        <button><Link to='/help'>Help</Link></button>
    </div>
  )
}

export default NavBar