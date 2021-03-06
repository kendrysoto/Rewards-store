import React, { useState } from 'react';
import '../style/Points.css';



const Points = () => {
    const [point, setPoint] = useState({
        amount1: 1000,
        amount2: 5000,
        amount3: 7500,
        mesagge: '',
        actualAmount: 0
    });

    const fechPoints = (actualAmount) => {
        fetch('https://coding-challenge-api.aerolab.co/user/points', {
            method: 'POST',
            mode: "cors",
            redirect: 'follow',
            body: JSON.stringify(
                { 'amount': parseInt(actualAmount) }
            ),
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"
            }
        })
            .then(response => response.json())
            .then(jsondata => {
                setPoint({ message: jsondata['message'] + " " + jsondata['New Points'] })
            })

            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="points-box">
            <div>
                <h2 className="points-h3">Add your points</h2>
                <select onChange={(e) => setPoint({ actualAmount: e.target.value })} className="points-select">
                <option value={point.amount1} >select</option>
                    <option value={point.amount1} >1000</option>
                    <option value={point.amount2} >5000</option>
                    <option value={point.amount3} >7500</option>
                </select>
            </div>

            <button
                className="points-button"
                onClick={() => fechPoints(point.actualAmount)}>click</button>
            <p className="points-message">{point.message}</p>
        </div>
    )
}
export default Points;
