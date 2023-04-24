import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.lenght === 0) {
        return (
            <div className="container my-5">
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img src={prod.img} alt={prod.name} />
                        <small>Precio unitario: ${prod.price} </small>
                        <small>Cantidad: {prod.cantidad}</small>
                        <p>Precio Total: ${prod.price * prod.cantidad}</p>
                        <button
                            onClick={() => eliminarDelCarrito(prod.id) }
                            className="btn btn-danger"
                        >
                            <BsFillTrashFill />
                        </button>
                        <hr />
                    </div>
                ))
            }

            <h3>Total: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
        <Link className="btn btn-success" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart