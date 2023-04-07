import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({ item }) => {

    const navigate = useNavigate()


    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container my-5">
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>

            <ItemCount item={item}/>

            <Link to="/" className="btn btn-primary">Volver</Link>
        </div>
    )
}

export default ItemDetail