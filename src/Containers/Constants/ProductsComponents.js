import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductComponents.css'

const ProductsComponents = () => {
    const products = useSelector((state) => state.allProducts.products)

    const renderList = products.map((product) => {
        const { id, title, image, price, category, description } = product
        return (
            <div>
                <div key={id} className="card card-compact bg-base-100 shadow-xl ">
                    <figure><img className='imgSize' src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-start font-semibold">Title:{title.slice(0, 20)}</h2>
                        <div className=' text-start py-1'>
                            <p className='text-[18px] py-1'>category: {category}</p>
                            <p className='text-[18px] py-1'>Price:{price}$</p>
                            <p className='text-[18px] py-1'>Description:{description.slice(0, 52)}...</p>
                        </div>
                        <Link to={`/product/${id}`}>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-full">Details</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <>{renderList}</>
        </div>
    );
};

export default ProductsComponents;