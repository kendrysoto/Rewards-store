import * as types from './action-types';

const initialState = {
  loading: false,
  product: [],
  error: '',
  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload.dataProduct,
        error: ''
      }
    case types.FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        product: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;