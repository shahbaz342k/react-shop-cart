import { useState, useContext } from 'react';
import { CartContext } from './../CartContext';

const AddToCartButton = (props) => {

    const {product, title} = props;
	
	// get cart from context api
	const {cart,setCart} = useContext(CartContext);

    // isAdding set false on default
    const [isAdding, setIsAdding] = useState(false); 

    // add to cart function
    const addToCart = (event) => {
        event.preventDefault()

        // create a copy of cart object
        let _cart = {...cart}; 
        
        // check cart.items in cart object
        if( ! _cart.items ){
            _cart.items = {}
        }
        
        // check product id already exist in cart items object
        if( _cart.items[product._id]) {
            _cart.items[product._id] += 1
        }else{
            _cart.items[product._id] = 1;
        }

        // check totl iems in cart object
        if( !_cart.totalItems ){
            _cart.totalItems = 0;
        }

        // increase totalitems by one 
        _cart.totalItems +=1;
        

        // set updated data in cart 
        setCart(_cart);

        // set adding true on click 
        setIsAdding(true);

        // set adding false after one sec
        setTimeout( () => {
            setIsAdding(false);
        }, 1000)
        
    }
  return (
    <>
        <button disabled={isAdding} 
            className={ `${isAdding ? 'bg-green-500 ': 'bg-yellow-500'} px-4 py-1 rounded-full font-bold`} 
            onClick={(e) => addToCart(e,product)} > 
            {isAdding ? 'Adding' : title}
        </button>
    </>
  )
}

export default AddToCartButton;
