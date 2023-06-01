import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import React from 'react'
import '../css/Profile.css';
import BarraMenu from './Menu';

function ProductDetail() {
    const {productId} = useParams();

    const [ListadoProductos, setListadoProductos] = useState([]);

    useEffect (() => {
      fetch("https://646e5db89c677e23218b94aa.mockapi.io/api/v1/productos")
      .then((Listado) => Listado.json())
      .then((Listado) => {
        setListadoProductos(Listado);
      })
    },[]);

    const thisProduct = ListadoProductos.find(prod => prod.id === productId)

    if(!thisProduct){
        return(
            <div className='root'>
            <BarraMenu />
            <h1>NO HAY PRODUCTOS</h1>
            </div>
        )
    }
    
    return (
        <div className='root'>
            <BarraMenu />
            <Link to="/profile" className="enlace">Inicio</Link>
            <h1>{thisProduct.name}</h1>
            <p>Precio: ${thisProduct.precio}</p>
            <p>Descripcion: {thisProduct.descripcion}</p>
            <p><img src={thisProduct.url} width="100px" height="100px" /></p>
        </div>
    )
}

export default ProductDetail;