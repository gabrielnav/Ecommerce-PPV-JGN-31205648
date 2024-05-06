import {BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Item from "./components/Item"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Welcome from "./components/Welcome"



function App() {


  return (
    <BrowserRouter>
      
    <NavBar/>
    <Welcome/>
     <ItemListContainer/>
     <Item/>

    <Routes>

     <Route exact path="/" element={<Welcome/>} />

    </Routes>

    <Footer/>

    </BrowserRouter>
  )
}

export default App
