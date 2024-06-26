import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import Goto from './components/Goto';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
const App = () => {
  const current_theme=localStorage.getItem('current_theme');
  const [theme,setTheme]=useState(current_theme?current_theme:'light');
  useEffect(()=>{
    localStorage.setItem('current_theme',theme);
  },[theme])
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
      </div>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/' element={<About />}></Route>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/' element={<Login />}></Route>
      </Routes>
      <div className={` ${theme}`}>
        <Goto theme={theme} setTheme={setTheme}/>
      </div>
      <div className={`Goto ${theme}`}>
        <Footer theme={theme} setTheme={setTheme}/>
      </div>
    </BrowserRouter>
  );
};
export default App;
