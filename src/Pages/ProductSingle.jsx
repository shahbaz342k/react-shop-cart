import {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import AddToCartButton from './../Components/AddToCartButton';

const API_URL = 'http://localhost:5000/api';
const PRODUCT_API_URL = `${API_URL}/products`;

const ProductSingle = () => {
	const [product, setProduct] = useState({})
	const params = useParams();
	const navigate = useNavigate();
	// console.log(params)
	
	useEffect(() => {
		fetch(`${API_URL}/products/${params._id}`)
		.then(response=>response.json())
			.then(product => {
				// console.log(product)
				setProduct(product)
			})
	}, [params._id])
	
  return (
	<>
		<div className='container mx-auto mt-12'>
			<button className='mb-12 font-bold' onClick={() => { navigate(-1) }}>Go Back</button>
			<div className='flex'>
				<img src='/images/peproni.png' />
				<div className='ml-16'>
					<h1 className='text-xl font-bold'>{product.name}</h1>
					<div className='text-md'>{product.size}</div>
					<div className='font-bold mt-2'>$ {product.price}</div>
					<AddToCartButton product={product} title="Add To Cart" />
				</div>
			</div>
		</div>
	</>
  )
}
export default ProductSingle