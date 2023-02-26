import './ItemListContainer.scss'


const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="contenedor">
            <h2>Item List Container</h2>
            <hr />
            {greeting}
        </div>
    )
}

export default ItemListContainer