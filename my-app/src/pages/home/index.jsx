import { useEffect, useState } from "react";
import api from '../../services/api'
import { ProductList } from "../../components/ProductList";

function Home () {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get('/api/product').then(({data}) => {
      setProduct(data);
    })

    // eslint-disable-next-line
  }, []);
  
  return(
    <>
      <button><a href='/cadastro'>Cadastrar</a></button>
      {product.length > 0 && (
        <ProductList product={product}/>
      )}

      {product.length === 0 && (
        <h1>NO PRODUCT</h1>
      )} 
    </> 
  )
}

export default Home;