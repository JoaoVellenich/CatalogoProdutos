import './styles.css';

import { ProductCard } from '../ProductCard';

export const ProductList = ({product = []}) => {
    return(
        <div className='productList'>
            {product.map(product => (
                <ProductCard
                    name={product.name}
                    image={product.imageUrl}
                    id={product.id}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    )
}