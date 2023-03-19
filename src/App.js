import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from "./Components/Nosotros/Nosotros";
import Contacto from "./Components/Contacto/Contacto";

function App() {

  return (
    <BrowserRouter>


    <Navbar />
    <Nosotros/>
    <Contacto/>
    <ItemListContainer />
    
    </BrowserRouter>

  );
}

export default App;
