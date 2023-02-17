import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProducts, selectedProducts } from './Actions/ProductAction';

const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { id, title, image, price, category, description } = product
    console.log(product)
    const { productId } = useParams()
    const dispatch = useDispatch()
    const fetchProductDetail = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log(err))
        dispatch(selectedProducts(res.data))
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail()
        dispatch(removeSelectedProducts())
    }, [productId])

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto">
                <figure className='imgSize'><img src={image} alt="Album" /></figure>
                <div className="card-body mt-72">
                    <h2 className="text-start text-xl">Price:{title}</h2>
                    <div>
                        <p className='text-start font-semibold'>price: {price}$</p>
                        <p className='text-start font-semibold'>category:{category}</p>
                        <p className='text-start font-semibold'>description:{description}</p>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn w-full btn-primary">Add To cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;