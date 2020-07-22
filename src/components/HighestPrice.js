import React, { useState, useEffect, useReducer } from 'react';
import config from '../config.json';
import headers from '../utils/HeadersRequired';
import ProductReducer from '../reducers/productReducers';
import '../style/ProductList.css';
import '../style/UsePagination.css';
import customStyles from './customStyles';
import Modal from 'react-modal';
import { connect } from 'react-redux'
import { fetchProduct } from '../redux/AsyncActions';



export const HighestPrice = ({fetchProduct, Data}) => {
    const initialState1 = {
        loading: true,
        error: '',
        posts: [],
        users: [],
    }
    const [buy, setBuy] = useState({
        point: 0,
        product: [],
    });
    const [state, dispatch] = useReducer(ProductReducer, initialState1)
    const [isOpen, setIsOpen] = useState(false);

    Modal.setAppElement('#root')

    useEffect(() => {
        fetchProduct()

        fetch(`${config.config.UrlBase}/user/me`, { headers })

            .then(response => response.json())
            .then(jsondata => {
                setBuy({ point: jsondata['points'] })
            })

            .catch(error => {
                console.log(error)
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
        <div >
            {Data.filter(prices => prices.cost > 240).map(pro => (
                <div className="Category-container" key={pro._id}>
                    {pro.cost > buy.point
                        ? <div className="ProducList-point"  >
                            <p className="point-p">Te faltan  {(pro.cost - buy.point)} puntos</p>
                        </div>
                        : <div>
                            <button className="ProducList-button" onClick={() => fechPoints(pro._id)}>
                                <img className="product-img" src="https://i.ibb.co/JCghNXv/buy-white11.jpg" />
                            </button>
                        </div>
                    }
                    <img className="ProducList-img" src={pro.img.url} />
                    <hr className="hr2"></hr>
                    <p className="ProducList-category">{pro.category}</p>
                    <h3 className="ProducList-name">{pro.name}</h3>
                    <Modal
                        isOpen={isOpen}
                        contentLabel="Selected Option"
                        closeTimeoutMS={200}
                        style={customStyles}
                    >
                        <h1 className="message" >
                            your exchange was successful</h1>
                        <img className="modal-img" src="https://i.ibb.co/sjCh9S5/happy3333333.jpg" />
                        <button className="modal-button" onClick={handleClose}>close</button>
                    </Modal>
                </div>
            ))}
        </div>
    )
}

const mapStatetoProps = state => {
    return {
      Data: state.product,
      loading: state.loading,
      error: state.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: () => dispatch(fetchProduct())
    }
  }
  
  export default connect(
    mapStatetoProps,
    mapDispatchToProps
  )(HighestPrice);








