import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.imagen} alt={producto.name}/>
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <Link className='ver-mas' to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}
