

const Item = ( {item} ) => {

    return (
            <div className='col-3 m-1'>
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <p>Precio: <strong>${item.price}</strong></p>
                <button className='btn btn-primary'>Ver más</button>
            </div>
    )
}

export default Item