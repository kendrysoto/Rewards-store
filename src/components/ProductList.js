import React, { useState, useEffect, useReducer } from 'react';
import config from '../config.json';
import headers from '../utils/HeadersRequired';
import '../style/User.css';
import ProductReducer from '../reducers/productReducers';
import '../style/ProductList.css';
import UsePagination from './UsePagination';



const ProductList = () => {
    const initialState = {
        loading: true,
        error: '',
        posts: [],
        users: [],
    }
    const itemsPerPage2 = 2;
    const [state, dispatch] = useReducer(ProductReducer, initialState)
    const [buy, setBuy] = useState({
        point: 0,
        product: [],
        mesagge: '',
    });

    useEffect(() => {
        fetch(`${config.config.UrlBase}/user/me`, { headers })

            .then(response => response.json())
            .then(jsondata => {
                setBuy({ point: jsondata['points'] })
            })
            .catch(error => {
                console.log(error)
            });

        fetch("https://coding-challenge-api.aerolab.co/products", { headers })

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

    const fechPoints = (id) => {
        fetch('https://coding-challenge-api.aerolab.co/redeem', {
            method: 'POST',
            mode: "cors",
            redirect: 'follow',
            body: JSON.stringify(
                { 'productId': id }

            ),
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
            }
        })
            .then(response => response.json())
            .then(jsondata => {
                setBuy({ product: jsondata['_id'] })
                setBuy({ message: jsondata['message'] })
            })

            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div>
            
            <UsePagination  data={state.posts} itemsPerPage={itemsPerPage2}  buy={buy} fechPoints={fechPoints}/>
            
        </div>
    )
}

export default ProductList;

