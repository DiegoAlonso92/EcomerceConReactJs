import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from "./Components/Nosotros/Nosotros";
import Contacto from "./Components/Contacto/Contacto";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";


function App() {

  return (
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

  );
}

export default App;
