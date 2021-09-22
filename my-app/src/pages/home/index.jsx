import { useEffect, useState } from "react";
import api from '../../services/api'
import { ProductList } from "../../components/ProductList";
import { InputCard } from "../../components/InputCard";

import './styles.css'

function Home () {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get('/api/product').then(({data}) => {
      setProduct(data);
    })

    // eslint-disable-next-line
  }, []);
  
  return(
    <div className='container'>

      <h1 className='titulo'>Produtos CRUD</h1>

      {product.length > 0 && (
        <ProductList product={product}/>
      )}

      {product.length === 0 && (
        <h1>NO PRODUCT</h1>
      )} 

        <InputCard/>

    </div> 
  )
}

export default Home;