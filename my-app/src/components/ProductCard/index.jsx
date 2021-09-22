import './styles.css'
import api from '../../services/api';


export const ProductCard = ({name, image, id, price, description}) =>{

    async function handleDelete(){
        api.delete('/api/product/'+id);
        window.location.href='/';
    }

    async function handleEdit(){
        const newName = prompt('New Name:', name);
        const newDescription = prompt('New Description:', description);
        const newImageUrl = prompt('New imageUrl:', image);
        const newPrice = prompt('New Price:', price);

        if(newName !==null && newDescription!==null && newImageUrl!==null &&newPrice!==null){
            const data = {
                name:newName, 
                description:newDescription, 
                price:newPrice, 
                imageUrl:newImageUrl
            }

            api.put('/api/product/'+id, data);
            window.location.href='/';
        }
    }

    return (
        <div className='Containter'>
            <h3 className='prodc-name'>{name}</h3>
            <div className='imageContainer'>
                <img src={image} alt='' className='image'/>
            </div>
            <div className='prodc-content'>
                <p className='Price'>R$: {price}</p>
                <p className='Description'>{description}</p>
            </div>
            <button onClick={handleDelete} className='Button-Del'>Delete</button>
            <button onClick={handleEdit} className='Button-Edit'>Edit</button>
        </div>
    );
}


