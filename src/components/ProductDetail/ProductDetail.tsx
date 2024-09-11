import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState } from '../../store/Store';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) => state.find(p => p.id === Number(id)));

  if (!product) return <div>Product not found!</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <Link to="/products">Back to Product List</Link>
    </div>
  );
};

export default ProductDetail;
