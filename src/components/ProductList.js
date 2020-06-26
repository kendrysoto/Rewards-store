import React, { useReducer, useEffect } from 'react';
import config from '../config.json';
import headers from '../utils/HeadersRequired';
import ProductReducer from '../reducers/productReducers';
import userReducer from '../reducers/userReducer';
import '../style/ProductList.css';
import Buy from './Buy';




const initialState1 = {
    loading: true,
    error: '',
    posts: [],
    users: [],
}
const initialState2 = {
    loading: true,
    error: '',
    users: [],
}



const ProductList = () => {
    const [state, dispatch] = useReducer(ProductReducer, initialState1)
    

    useEffect(() => {
        fetch( "https://coding-challenge-api.aerolab.co/products", { headers })
       
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
                console.log(data)
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            });
            }, []);

     



    return (
        <div >
    
            {state.posts.map((product) =>
                <div className="Category-container" key={product._id}>
                    
                   
                    {product.cost > 1000 ?  + (product.cost - 1000) : "mostrar boton comprar"}
                    
                    <img  className="ProducList-img" src={product.img.url} />
                    <hr className="hr2"></hr>
                    <p className="ProducList-category">{product.category}</p>
                    <h3 className="ProducList-name">{product.name}</h3>
                    
                </div>
            )}


        </div>
    )
}

export default ProductList;
