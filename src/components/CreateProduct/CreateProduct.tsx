import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addProduct } from '../../store/Store'; 
import { useNavigate } from 'react-router-dom';

const CreateProduct: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newProduct = {
        id: Date.now(),
        name,
        image,
        liked: false,
        description,
      };
      dispatch(addProduct(newProduct));
      navigate('/products'); 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Product Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Create Product</button>
      </form>
    );
  };
  
  export default CreateProduct;