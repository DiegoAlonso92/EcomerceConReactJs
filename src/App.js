import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      
      <Navbar />
      <ItemListContainer greeting="Hola mundo" />

      <div className="container">
<Button>Click me! :)</Button>
      </div>

    </div>
  );
}

export default App;
