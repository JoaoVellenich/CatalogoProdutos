import './styles.css'
import api from '../../services/api';


export const ProductCard = ({name, image, id, price, description}) =>{

    async function handleDelete(){
        api.delete('/api/product/'+id);
        window.location.href='/';
    }

    return (
        <div className='Containter'>
            <h3 className='prodc-name'>{name}</h3>
            <image src='#' alt={name} className='prodc-img'></image>
            <div className='prodc-content'>
                <p className='Price'>R$: {price}</p>
                <p className='Description'>{description}</p>
            </div>
            <button onClick={handleDelete} className='Button-Del'>Delete</button>
            <button  className='Button-Edit'>Edit</button>
        </div>
    );
}


