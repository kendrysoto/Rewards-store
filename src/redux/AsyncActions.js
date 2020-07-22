import axios from 'axios';
import * as types from './action-types';
import config from '../config.json';
import headers from '../utils/HeadersRequired';

export const fetchProduct = () => {
    return (dispactch) => {
        dispactch(fetchProductRequest)
        axios.get(`${config.config.UrlBase}/products`, { headers })
            .then(response => {
                const dataProduct = response.data
                dispactch(fetchProductSucces(dataProduct))
            })
            .catch(error => {
                const errorMsg = error.payload
                dispactch(fetchProductFailure(errorMsg))
            })
    }
}



export const fetchProductSucces = (dataProduct) => {
    return {
        type: types.FETCH_PRODUCT_SUCCESS,
        payload: {
            dataProduct,
            
        }
    }
}

export const fetchProductFailure = (error) => {
    return {
        type: types.FETCH_PRODUCT_FAILURE,
        payload: error
    }
}

export const fetchProductRequest = (error) => {
    return {
        type: types.FETCH_PRODUCT_REQUEST,
        error
    }
}



export default { fetchProduct,fetchProductSucces,fetchProductFailure,fetchProductRequest }
