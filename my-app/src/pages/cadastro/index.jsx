import { useState } from "react";
import api from '../../services/api'

function Cadastro () {

    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(0);

    async function handleSubmit(){
        const data = {
            name, 
            description, 
            price, 
            imageUrl
        }

        const response = await api.post('/api/product', data);
        
        if(response.status === 200){
            window.location.href='/';
        }else{
            alert('erro ao cadastrar produto');
        }

    }

    async function handleShow(){
        await api.get('/api/product');
    }


    return (
        <div className="App">
          <input 
            type='text' 
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
          <input 
            type='url'
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          ></input>
          <input 
            type='text'
            value={description}
            onChange={e => setDescription(e.target.value)} 
          ></input>
          <input 
            type='number'
            value={price}
            onChange={e => setPrice(e.target.value)} 
          ></input>
          <button onClick={handleSubmit}>Subbmit</button>
          <button onClick={handleShow}>show</button>
          <button><a href='/'>Home</a></button>
        </div>
    );    
}

export default Cadastro;