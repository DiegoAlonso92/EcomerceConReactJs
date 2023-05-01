import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, query, where, addDoc, writeBatch, documentId, getDocs } from "firebase/firestore"
import { Formik } from 'formik'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('Este campo es obligatorio')
        .min(4, 'El nombre debe tener 4 caracteres como mínimo')
        .max(30, 'Máximo 30 caracteres'),
    direccion: Yup.string()
        .required('Este campo es obligatorio')
        .min(6, 'La dirección debe tener 6 caracteres como mínimo')
        .max(30, 'Máximo 30 caracteres'),
    email: Yup.string()
        .email('El email es inválido')
        .required('Este campo es obligatorio')
})

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)


    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart.map((prod) => ({ id: prod.id, price: prod.price, cantidad: prod.cantidad, name: prod.name })),
            total: totalCompra(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')

        const outOfStock = []

        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))
        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()

            addDoc(ordersRef, orden)
                .then((doc) => {
                    setOrderId(doc.id)
                    vaciarCarrito()
                })
        } else {
            alert("Hay items sin stock")
        }




    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu orden se registró con éxito!</h2>
                <hr />
                <p>Guarda tu código de orden: {orderId}</p>
                <Link className="btn btn-primary my-3" to="/">Volver al inicio</Link>
            </div>
        )
    }

    if (cart.lenght === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                validationSchema={schema}
                onSubmit={generarOrden}
            >
                {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            value={values.nombre}
                            type={'text'}
                            placeholder='Tu nombre'
                            className="form-control my-2"
                            name="nombre"
                        />
{errors.nombre && <p className="alert alert-danger">{errors.nombre}</p>}

                        <input
                            onChange={handleChange}
                            value={values.direccion}
                            type={'text'}
                            placeholder='Dirección'
                            className="form-control my-2"
                            name="direccion"
                        />
                        {errors.direccion && <p className="alert alert-danger">{errors.nombre}</p>}

                        <input
                            onChange={handleChange}
                            value={values.email}
                            type={'email'}
                            placeholder='Tu Email'
                            className="form-control my-2"
                            name="email"
                        />
                        {errors.email && <p className="alert alert-danger">{errors.nombre}</p>}


                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Enviar</button>
                    </form>
                )}
            </Formik >


        </div>
    )
}

export default Checkout