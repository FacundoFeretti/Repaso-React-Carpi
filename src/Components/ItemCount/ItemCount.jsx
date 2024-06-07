import React from 'react'

export const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    return (

    <div>
        <div className="item-count">
            { cantidad === 1 ? <button disabled>-</button> : <button onClick={handleRestar}>-</button> }
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button onClick={handleAgregar} className="agregar-al-carrito">Agregar al Carrito</button>
    </div>
  )
}
