import { useContext } from 'react';
import { CartContext } from './../CartContext';
// import { useEffect } from 'react';

const CartDataRow = (props) => {
	
	// get cart from context api
	const {cart,setCart} = useContext(CartContext)
	const {product} = props;

	

	const getQty = (id) => {
		if( cart.items[id] ){
			return cart.items[id];
		}
		
	}
	const qtyManage = (productid,type) => {
		const oldQty =  cart.items[productid];
		const _cart = {...cart};
		if( type === 'inc' ){
			_cart.items[productid] = oldQty + 1;
			_cart.totalItems += 1;
		}else if( type === 'dec' ) {
			if( _cart.items[productid] !== 1 ){
				_cart.items[productid] = oldQty - 1;
				_cart.totalItems -= 1;
			}
		}
		
		setCart(_cart); 
	}

	const getSubTotal = ( productid, price ) => {
		const sum = getQty(productid) * price;
		return sum;
	}

	const itemDelete = (productid) => {
		const oldQty =  cart.items[productid];
		const _cart = {...cart};
		delete _cart.items[productid];
		_cart.totalItems = _cart.totalItems - oldQty;
		setCart(_cart);
		// window.localStorage.setItem('itemdelete',true);
		window.location.reload();

	}
	
	return(
		<>
			<ul>
				<li className='mb-12'>
					<div className="flex items-center justify-between">

						<div className='flex items-center'>
							<img src='/images/peproni.png' className='h-16' />
							<span className='font-bold ml-4 w-48'>{product.name}</span>
						</div>
						
						<div>
							<button onClick={ () => {
								qtyManage(product._id,'dec')
							}} className='bg-yellow-500 rounded-full px-4 py-2 leading-none'> - </button>
							<b className='px-4'> { getQty(product._id) } </b>
							<button onClick={ () => { qtyManage(product._id,'inc') }} className='bg-yellow-500 rounded-full px-4 py-2 leading-none'> + </button>
						</div>
						
						<span> $ { getSubTotal(product._id,product.price) } </span>
						<button onClick={ () => { itemDelete(product._id) } } className='bg-red-500 rounded-full px-4 py-2 leading-none text-white'>Delete</button>
					</div>
				</li>
			</ul> 
		</>
	);
}
export default CartDataRow;