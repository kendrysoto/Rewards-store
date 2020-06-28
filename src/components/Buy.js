import React, { useState, useEffect, useReducer } from 'react';
import config from '../config.json';
import headers from '../utils/HeadersRequired';
import '../style/User.css';
import ProductReducer from '../reducers/productReducers';
import '../style/ProductList.css';


const initialState1 = {
    loading: true,
    error: '',
    posts: [],
    users: [],
}

const Buy = () => {
    const [buy, setBuy] = useState({
        point: 0,
        product: [],
        mesagge: '',
    });

    const [state, dispatch] = useReducer(ProductReducer, initialState1)




    useEffect(() => {

        fetch(`${config.config.UrlBase}/user/me`, { headers })

            .then(response => response.json())
            .then(jsondata => {
                setBuy({ point: jsondata['points'] })
                console.log(jsondata['points'])
                console.log(jsondata)
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

    const submitHandler = (id) => {
        console.log(id)
        console.log(typeof id)
        console.log("MMMMMMMMMMMMMMMMMMMMMM")
        fetch('https://private-anon-9a56df0539-aerolabchallenge.apiary-mock.com/redeem', {
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
                console.log(jsondata['message'])
            })

            .catch(error => {
                console.log(error)
            })
    }



    return (

        <div>
            {state.posts.map((pro) =>
                <div className="Category-container" key={pro._id}>
                    {pro.cost > buy.point 
                    ? "Te faltan " + (pro.cost - buy.point)
                    : <button className="ProducList-button" onClick={() => submitHandler(pro._id)}> 
                        <img className="product-img" src="https://i.ibb.co/JCghNXv/buy-white11.jpg" /> 
                    </button>}

                    <img className="ProducList-img" src={pro.img.url} />
                    <hr className="hr2"></hr>
                    <p className="ProducList-category">{pro.category}</p>
                    <h3 className="ProducList-name">{pro.name}</h3>
                    {buy.message}
                </div>
            )}
            <p >{buy.product}</p>
        </div>
    )
}

export default Buy;

