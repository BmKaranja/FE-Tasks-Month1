import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import AbouUs from './AbouUs'
import ContactUs from './ContactUs'
import { Route, Routes } from 'react-router-dom'
const navbarEl = document.querySelector(".navbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
function App() {
  return (
    <main>
      <Routes>
        <Route path='/AboutUs' element={<AbouUs/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
        <Route element={<Home/>}></Route>
      </Routes>
      <NavBar/>
      <div className='bottom-container'>
        <span id='Home'><Home/></span>
        <span id='AboutUs'><AbouUs/></span>
        <span id='ContactUs'><ContactUs/></span>
      </div>
    </main>
  )
}

export default App
