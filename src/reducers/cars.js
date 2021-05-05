import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    carList: [],
    page: 1,
}

const cars = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_CAR_LIST: 
            return {
                ...state,
                carList: action?.payload?.carList,
                totalPageCount: action?.payload?.totalPageCount,
                totalCarsCount: action?.payload?.totalCarsCount,
            }
        
        case ACTION_TYPES.FETCH_CAR_DETAILS: 
            return {
                ...state,
                carDetails: action?.payload?.carDetails
            }
        
        default: return state;
    }
}

export default cars