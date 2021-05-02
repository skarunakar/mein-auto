import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    carList: [],
    page: 1,
}

const cars = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.FETCH_CAR_LIST: {
            return {
                ...state,
                cars: state?.payload?.cars
            }
        };
        case ACTION_TYPES.FETCH_CAR_DETAILS: {
            return {
                ...state,
                car: state?.payload?.car
            }
        };
        default: return state;
    }
}

export default cars