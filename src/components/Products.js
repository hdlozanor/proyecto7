import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {

  const [ListadoProductos, setListadoProductos] = useState([]);

  useEffect (() => {
    fetch("https://646e5db89c677e23218b94aa.mockapi.io/api/v1/productos")
    .then((Listado) => Listado.json())
    .then((Listado) => {
      setListadoProductos(Listado);
    })
  },[]);


  const products = ListadoProductos.map(product => {
    return (
      <div key={product.id}>
        <h3>
          <Link to={`/profile/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p><img src={product.url} width="100px" height="100px" /></p>
        <hr />
      </div>
    );
  });

  return (
    <>
      <h1>Pagina de productos</h1>
      {products}
    </>
  );
};

export default Products;