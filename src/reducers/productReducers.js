
 const initialState = {
    loading: true,
    error: '',
    posts: [],
    puntos: [],
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                posts: action.payload,
                error: '',
            }
            case 'FETCH_PUNTOS_SUCCESS':
            return {
                loading: false,
                puntos: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                posts: [],
                 puntos: [],
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}

export default ProductReducer;
