import React, { useReducer, useEffect } from 'react';
import config from '../config.json';
import headers from '../utils/HeadersRequired';
import userReducer from '../reducers/userReducer';
import '../style/User.css';
import UsePagination from './UsePagination';



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
        <div>
            <UsePagination
                data={state.historial}
                itemsPerPage={16} 
            >
            </UsePagination>
        </div>
    )
}
export default History;
