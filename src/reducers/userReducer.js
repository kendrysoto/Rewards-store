const initialState = {
    loading: true,
    error: '',
    users: [],
    historial:[]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
            case 'FETCH_HISTORIAL_SUCCESS':
            return {
                loading: false,
                historial: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                users: [],
                historial:[],
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}

export default userReducer;
