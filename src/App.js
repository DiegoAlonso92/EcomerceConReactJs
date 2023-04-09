import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from "./Components/Nosotros/Nosotros";
import Contacto from "./Components/Contacto/Contacto";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./context/CartContext";
import { useState } from "react";

function App() {

const [cart, setCart] = useState([])

console.log(cart)


const agregarAlCarrito = (item) => {
  setCart([...cart, item])
}

const isInCart = (id) => {
  return cart.some((prod) => prod.id === id)
}

  return (
<CartContext.Provider value={{
  cart,
  agregarAlCarrito,
  isInCart
}}>
  

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="/nosotros" element={ <Nosotros /> }/>
        <Route path="/contacto" element={ <Contacto /> }/>
        <Route path="*" element={ <Navigate to="/" /> }/> 
      </Routes>


    </BrowserRouter>

</CartContext.Provider>
  );
}

export default App;
