import React, { useReducer, useEffect } from 'react';
import config from '../config.json';
import headers from '../utils/HeadersRequired';
import userReducer from '../reducers/userReducer';
import '../style/User.css';


const History = () => {
    const initialState = {
        loading: true,
        error: '',
        users: [],
        historial: []
    }   

    const [state, dispatch] = useReducer(userReducer, initialState)

    useEffect(() => {
        fetch('https://coding-challenge-api.aerolab.co/user/history', { headers })
            .then(function (response) {
                return response.json();
            }).then(function (history) {
                dispatch({ type: 'FETCH_HISTORIAL_SUCCESS', payload: history })
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, []);





    return (
        <div >

            {state.historial.map((hist) =>
                <div className="Category-container" key={hist._id}>
                    <img className="ProducList-img" src={hist.img.url} />
                    <hr className="hr2"></hr>
                    <p className="ProducList-category">{hist.category}</p>
                    <h3 className="ProducList-name">{hist.name}</h3>
                </div>
            )}
        </div>
    )
}
export default History;
