import React, {useState, useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList.jsx';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config.js';


export const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState('Productos')
  const category = useParams().categoria ;
  
 
  useEffect(() => {

    const productosRef = collection(db, 'productos');

    const qry = category ? query(productosRef, where("categoria", "==", category)) : productosRef;

    getDocs(qry)
    .then((resp) => {
    
      setProductos(
        resp.docs.map((doc) => {
          return {...doc.data(), id: doc.id}
        })
      )

    });

  }, [category])
  
  
    return (
    <div>
        <ItemList products={productos} title={titulo}/>
    </div>
  )
}
