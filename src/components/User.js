import React, { useReducer, useEffect } from 'react';
import config from '../config.json';
import headers from '../utils/HeadersRequired';
import userReducer from '../reducers/userReducer';
import '../style/User.css';



const initialState = {
    loading: true,
    error: '',
    users: [],
}


const User = ()=> {
    const [state, dispatch] = useReducer(userReducer, initialState)


    useEffect(() => {


        fetch( `${config.config.UrlBase}/user/me`, { headers })
       
            .then(function (response) {
                return response.json();
            }).then(function (user) {
                console.log(user)
                console.log("############")

                dispatch({ type: 'FETCH_USER_SUCCESS', payload: user })
               
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERROR' })
            })
            }, []);

     



    return (
        <div className="users-box">
        <p className="users-name">{state.users.name} </p>
      
        <p className="users-points">{state.users.points}<img  className="user-img" src="https://i.ibb.co/xGs19gB/icon-img.png" /></p>
        
    </div>
    )
}
export default User;