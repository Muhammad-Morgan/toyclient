import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useGlobalContext } from "./Utilities/context";
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Submenu from './Components/Submenu'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Products from './Pages/Products';
function App() {
  return (
    <main>
      <Router>
      <Navbar />
      <Sidebar />
      <Submenu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/:category' element={<Products />} />
        </Routes>
      </Router>

    </main>
  )
}

export default App
