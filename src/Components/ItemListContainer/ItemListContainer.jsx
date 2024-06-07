import React, {useState, useEffect} from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('Productos')
  const category = useParams().categoria ;
  
 
  useEffect(() => {
        pedirDatos()
            .then((res) => {
                if(category) {
                  setProductos(res.filter((prod) => prod.categoria === category));
                  setTitulo(category)
                } else {
                  setProductos(res)
                  setTitulo('Productos')
                }
            })   
  }, [category])
  
  
    return (
    <div>
        <ItemList products={productos} title={titulo}/>
    </div>
  )
}
