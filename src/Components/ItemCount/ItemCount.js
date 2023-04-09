

const ItemCount = ( {max, cantidad, setCantidad, handleAgregar} ) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="my-3">
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <br />
            <button onClick={handleAgregar} className="btn btn-success my-2">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount 