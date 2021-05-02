import ACTION_TYPES from './actionTypes';
import getDataFromResponse from '../utils/getDataFromResponse';
import { getCars } from "../services/carsInfo";
import carsReader from '../readers/cars';

const saveCarList = (dispatch) => (carsRepsonse) => {
    const carsData = getDataFromResponse(carsRepsonse);
    const cars = carsReader.colors(carsData);
    dispatch({
        type: ACTION_TYPES.FETCH_CAR_LIST,
        payload: {
            cars,
        }
    })
}

export const fetchCarList = () =>  {
    return function(dispatch){
        getCars().then(saveCarList(dispatch))
    }
}

export const fetchCarDetails = () =>  {
    return function(dispatch){
        //getManufacturers.then(saveManufacturers(dispatch))
    }
}