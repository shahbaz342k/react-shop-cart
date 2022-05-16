import { useContext } from 'react';
import CartDataRow from './CartDataRow';
import { CartContext } from './../CartContext';
import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = 'http://localhost:5000/api';

const CartData = () => {
	// get cart from context api
	const {cart,setCart} = useContext(CartContext);
	let total = 0;
	// set products 
	const [products, setProducts] = useState([]);

	// price fetched
	const [priceFetched, setPriceFetched] = useState(false);

	// set data on useEffect hook
	useEffect( () => {
		if( ! cart.items ){
			return;
		}
		
		// check products is prefetched or not
		if( priceFetched ){
			return;
		}
		
		// get product from cart items api
		fetch(`${API_URL}/products/cart-items`, {
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify( {ids : Object.keys(cart.items) } ) 
		})
		.then( res => res.json() )
		.then( products => {
			setProducts(products);
			setPriceFetched(true);
		})
		
	}, [cart])

	const getQty = (id) => {
		if( cart.items[id] ){
			return cart.items[id];
		}
		
	}
	// get total price from cart
	const getTotal = () => {
		if( !products.length ){
			return 0;
		}
		products.map(product => {
			total += getQty(product._id) * product.price; 
		})
		return total;
	}
	// order now btn
	const handleOrderNow = () => {
		alert('Order Placed');
		setCart([]);
		setProducts({})
	}
	
	return(
		<>
			{  products.length ? 
			<div className="container mx-auto lg:w-1/2 pb-24 w-full">
					<h1 className="text-lg font-bold my-8 mb-12">Cart Items </h1>
					{
						products.map(product => <CartDataRow key={product._id} product={product} />) 

					}
					<hr />

					<div className='text-right mt-4'>
						<span><b>Grand Total : $ {getTotal()}
						
							</b></span>
						<div className='mt-4'>
						<button onClick={handleOrderNow} className='bg-yellow-500 rounded-full px-4 py-2 leading-none'>Order Now</button>
						</div>
						
					</div>
					
			</div> 
			: 
				<div className="container mx-auto lg:w-1/2 pb-24 w-full">
					<h1 className="text-lg font-bold my-8 mb-12">Empty Cart</h1>
					<img src='/images/empty-cart.png' className='mx-auto w-64' />

				</div>
				
			}
		</>
	);
}
export default CartData;