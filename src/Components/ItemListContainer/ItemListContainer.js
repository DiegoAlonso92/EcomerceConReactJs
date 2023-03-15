import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import { pedirDatos } from '../../Helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {


        pedirDatos()
            .then((response) => {
                setProductos(response)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="contenedor">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }
        </div>
    )
}

export default ItemListContainer