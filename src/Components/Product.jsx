import { Link } from 'react-router-dom';

// import ProductSingle from './../Pages/ProductSingle';
import AddToCartButton from './AddToCartButton';

const Product = (props) => {
	// console.log(props)
	const {product} = props;
	return(
		<>
			<Link to={`/products/${product._id}`}>
				<div>
					<img src = "/images/peproni.png" />
					<div className="text-center">
						<h2 className="rounded-full font-bold py-2">{product.name}</h2>
						<span className="bg-gray-200 py-1 px-4 rounded-full text-sm">{product.size}</span>
					</div>
					<div className="flex items-center justify-between">
						<span>$ {product.price}</span>
						<AddToCartButton product={product} title="Add"/>
					</div>
				</div>
			</Link>
		</>
	);
}
export default Product;


