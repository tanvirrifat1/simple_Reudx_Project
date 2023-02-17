import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './Actions/ProductAction';
import ProductsComponents from './Constants/ProductsComponents';

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const fetchProduct = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(setProduct(res.data))
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    console.log(products, 'hello')

    return (
        <div>
            <ProductsComponents />
        </div>
    );
};

export default ProductListing;