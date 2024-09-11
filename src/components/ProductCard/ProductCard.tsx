import React from 'react';

interface ProductCardProps {
  product: { id: number; name: string; image: string; liked: boolean; }; 
  onLike: () => void; 
  onDelete: () => void; 
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onLike, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3 style={{textTransform: 'capitalize', textDecoration: 'none'}}>{product.name}</h3> 
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} /> 
      <button onClick={onLike}>{product.liked ? 'Unlike' : 'Like'}</button> 
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  );
};

export default ProductCard; 
