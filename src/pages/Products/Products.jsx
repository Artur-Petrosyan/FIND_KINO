import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../redux/selectors/products';
import { getProducts } from '../../redux/actions/asyncGetProducts';
import { API_ENDPOINTS } from '../../constants/api';

const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(productsSelector)

    useEffect(() => {
        dispatch(getProducts(API_ENDPOINTS.PRODUCTS))
    }, [dispatch])
    return (
        <div>
            {/* {products.map(({ id, title }) =>
                <h1 key={id}>{title}</h1>
            )} */}
        </div>
    );
};

export default Products;