import { useState } from "react";
import api from "../../services/api";
import './styles.css'

export const ProductInput = () => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(){
        const data = {
            name, 
            description, 
            price, 
            imageUrl
        }

        if(name!=='' && description!=='' && price!=='' && imageUrl!==''){
            const response = await api.post('/api/product', data);
        
            if(response.status === 200){
                window.location.href='/';
            }else{
                alert('erro ao cadastrar produto');
            }
        }else{
            alert('erro ao cadastrar produto');
        }
        

    }

    return (
        <div className="Container">
          <h1>Cadastrar Produto</h1>
          <div className='inputDiv'>
            <input 
              id='Name-input'
              placeholder='Nome'
              className='Input'
              type='text' 
              value={name}
              onChange={e => setName(e.target.value)}
            ></input><br/>
            <input 
              id='Image-input'
              placeholder='Imagem'
              className='Input'
              type='text'
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
            ></input><br/>
            <input 
              id='Descricao-input'
              placeholder='Descricao'
              className='Input'
              type='text'
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></input><br/>
            <input 
              id='Price-input'
              placeholder='price'
             className='Input'
              type='number'
              value={price}
              onChange={e => setPrice(e.target.value)} 
            ></input><br/>
          </div>
          <button onClick={handleSubmit} className='submitButton'>Subbmit</button>
        </div>
    );    
}