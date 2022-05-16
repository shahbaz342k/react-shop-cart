import Product from './Product';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from './../CartContext';

const API_URL = 'http://localhost:5000/api';
const PRODUCT_API_URL = `${API_URL}/products`;

const ProductListing = () => {

	const [products, setProducts] = useState([]); 
	const {name} = useContext(CartContext);

	useEffect( () => {
		fetch(PRODUCT_API_URL)
		.then(response => response.json() )
		.then(products => {
			// console.log(products)
			setProducts(products)
		})
	},[])
	
	return (
		<>
			<div className="container mx-auto">
				<h1 className="text-lg font-bold my-8">Products {name}</h1>
				<div className="grid grid-cols-5 my-8 gap-24">
					{
						products.map(product => <Product key={product._id} product={product}/>)

					}
				</div>
				
			</div> 
		</>
	);
}
export default ProductListing;