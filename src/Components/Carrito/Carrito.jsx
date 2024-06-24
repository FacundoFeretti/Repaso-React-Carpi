import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Carrito = () => {
  
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
  
    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
    <div className='container'>
        <h1 className='title'>Cart</h1>

        {
            carrito.map((prod) => {
                return (
                <div key={prod.id}>
                    <h3>{prod.titulo}</h3>
                    <p>${prod.precio}</p>
                    <p>Precio Unitario: ${prod.precio}</p>
                    <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                </div>
                )
            })
        }

        {
            carrito.length > 0 ?
            <>
                <h2>Precio Total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Eliminar Carrito</button>            
            </> :
            <h2>El carrito esta vacio</h2>
        }

    </div>
  )
}
