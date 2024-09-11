import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { Link } from 'react-router-dom'
import { deleteProduct, RootState, toggleLike } from '../../store/Store'
import ProductCard from '../ProductCard/ProductCard'

const ProductList: React.FC = () => {
	const products = useSelector((state: RootState) => state) 
	const dispatch = useDispatch()

	return (
		<div>
			{products.map(
				(
					product 
				) => (
					<Link to={`/products/${product.id}`} key={product.id}>
						<ProductCard
							product={product} 
							onLike={() => dispatch(toggleLike(product.id))}
							onDelete={() => dispatch(deleteProduct(product.id))} 
						/>
					</Link>
				)
			)}
		</div>
	)
}

export default ProductList
