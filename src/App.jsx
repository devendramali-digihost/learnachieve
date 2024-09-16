import { useState } from 'react'
import Header from './Component/Header/Header'
import "./assets/css/components.scss"
import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
