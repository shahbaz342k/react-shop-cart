import React from 'react';
import ProductListing from '../Components/ProductListing';
const Home = (props) => {
	return(
		<>
			<div className="hero py-16">
				<div className="container mx-auto flex items-center justify-between"> 
					<div className="w-1/2">
						<h6 className="text-lg"> Are you hungary?</h6>
						<h1 className="text-3xl md:text-6xl font-bold"> Don't Wait!</h1>
						<button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
					</div>
					<div className="w-1/2"> 
						<img className="w-4/5" src="/images/pizza.png" />
					</div>
				</div>
			</div>
				{/*product listing section */}
			<ProductListing />
		</>
	);
}
export default Home;