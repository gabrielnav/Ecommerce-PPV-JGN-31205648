import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
   
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<></>} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
   
  );
}

export default App;