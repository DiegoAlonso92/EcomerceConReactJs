import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirProductoPorId } from "../../Helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirProductoPorId(Number(itemId))
            .then((resp) => {
                setItem(resp)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer