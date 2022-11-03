import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
// import Child from './Child';
import Help from './Help';
import Home from './Home';
import NavBar from './NavBar';

function App(){
  const [login, setLogin] = useState(true)
  // const [toggle, setToggle] = useState(true)
  return(
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={login===true ? <About/> : <Navigate to='/'/>}/>
          <Route path='/help' element={login===true ? <Help/> : <Navigate to='/'/>}/>
          <Route path='*' element = {<h1>404 Page Not Found!</h1>}/>
        </Routes>
        <button onClick={()=>setLogin(!login)}>{login?'Log Out':'Login'}</button>
        <p>Login : {JSON.stringify(login)}</p>
      </BrowserRouter>
      {/* {toggle && <Child/>}
      <button onClick={()=>setToggle(!toggle)}>toggle</button> */}
    </div>
  )
}

export default App;
