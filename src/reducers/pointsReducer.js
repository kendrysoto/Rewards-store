const initialState = {
    loading: true,
    error: '',
    users: [],
}

const PointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POINTS_SUCCESS':
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                users: [],
                error: 'Something went wrong!'
            }
        default:
            return state
    }
}

export default PointsReducer;
