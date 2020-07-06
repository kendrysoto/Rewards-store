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
        modal: false
    });
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        fetch(`${config.config.UrlBase}/user/me`, { headers })
            .then(response => response.json())
            .then(jsondata => {
                setBuy({ point: jsondata['points'] })
            })
            .catch(error => {
                console.log(error)
            });

        fetch(`${config.config.UrlBase}/products`, { headers })

            .then(function (response) {
                return response.json();
            }).then(function (data) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
                
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            });
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const fechPoints = (id) => {
        fetch(`${config.config.UrlBase}/redeem`, {
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
                setBuy({ message: jsondata.message })
                setBuy({ modal: true })
                setIsOpen(true);
            })

            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <UsePagination
                data={state.posts}
                itemsPerPage={itemsPerPage2}
                isOpen={isOpen}
                buy={buy}
                fechPoints={fechPoints}
                handleClose={handleClose}
            >
            </UsePagination>
        </div>
    )
}

export default ProductList;

