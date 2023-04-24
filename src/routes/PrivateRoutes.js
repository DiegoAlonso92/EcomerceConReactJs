import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import { Navbar } from "../Components/Navbar/Navbar";
import Nosotros from "../Components/Nosotros/Nosotros";
import Contacto from "../Components/Contacto/Contacto";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../Components/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "../Components/Checkout/Checkout";


const PrivateRoutes = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes