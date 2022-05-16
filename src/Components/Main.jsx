import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import NavItems from './NavItems';

import Cart from '../Pages/Cart';
import Products from '../Pages/Products';
import Home from '../Pages/Home';
import ProductSingle from "../Pages/ProductSingle";
import { CartContext } from './../CartContext';
import { getCart, storeCart } from "./Helper";

const Main = () => {

	// set state of cart
	const [cart, setCart] = useState({});

	// fetch cart from localstorage
	useEffect( () => {
		// window.localStorage.setItem('cart', JSON.stringify({}));
		getCart().then(cart => {
			setCart(JSON.parse(cart))
		});
		// console.log(cart)
		
	}, []);

	// update cart when add to cart btn clicked
	useEffect( () => {
		storeCart(cart)
	}, [cart])

	return(
		<>
			<Router>
				<CartContext.Provider value={ {cart,setCart} }>
					<NavItems />
					<Routes>
						<Route path='/' exact element={<Home data-title="Homepage" />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/products' exact element={<Products />} />
						<Route path='/products/:_id' exact element={<ProductSingle />} />
					</Routes>
				</CartContext.Provider>
		  </Router>
		</>
	);
}
export default Main;