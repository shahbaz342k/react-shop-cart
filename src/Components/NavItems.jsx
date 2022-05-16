import {useContext} from 'react';
import { NavLink as Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
const logoCls = {
	height: 45
}
const cartStyle = {
	background: '#F59E0D',
      display: 'flex',
      padding: '6px 12px',
      borderRadius: '50px'
}
const NavItems = () => {
	const {cart} = useContext(CartContext);
	// console.log(cart.totalItems)
	return(
		<nav className="container mx-auto flex items-center justify-between py-4">
			<div className="logo-wrapper">
				<Link to="/"> <img src="/images/logo.png" style={logoCls} /> </Link>
			</div>
			<div className="" id="navbarNav">
				<ul className="flex items-center">

        			<li className="">
        				<Link to="/" className="nav-link">Home</Link>&nbsp;&nbsp;
        			</li>
        			<li className="ml-6">
        				<Link to="/products" className="nav-link">Products</Link>&nbsp;
        			</li>
        			<li className="ml-6">
						<Link to="/cart" className="nav-link">
								<div style={cartStyle}>
									<span className="text-white">{ cart.totalItems ? cart.totalItems : 0 }</span>
									<img src="/images/cart.png" alt="cart-icon"/>
								</div>
						</Link>&nbsp;&nbsp;
        			</li>
        			
        		</ul>
			</div>
		</nav>
			
	);
}
export default NavItems;