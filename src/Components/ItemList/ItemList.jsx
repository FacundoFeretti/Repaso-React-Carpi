import React from 'react'
import { Item } from '../ItemComponent/Item.jsx'
import { toCapital } from '../../helpers/toCapital.js'

export const ItemList = ( {products, title} ) => {

    return (
    <div className='container'>
        <h2 className='main-title'>{toCapital(title)}</h2>

        <div className='productos'>
            {products.map((prod) => {
                return(
                    <Item producto={prod} key={prod.id}/>
                )
            })}
        </div>
    </div>
  )
}
