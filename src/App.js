import { LoginProvider } from "./context/LoginContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
import AppRouter from "./routes/AppRouter";

function App() {


  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
