import ACTION_TYPES from './actionTypes';

//utils
import getDataFromResponse from '../utils/getDataFromResponse';
import { getCarListQueryString } from '../utils/getQueryString';

//services
import { getCars, getCarByStockNumber } from "../services/carsInfo";

//readers
import carListReader from '../readers/carList';
import carByStockNumberReader from '../readers/carByStockNumber';
import { cars } from '../services/mock';

const saveCarList = (dispatch) => (carsRepsonse) => {
    const carsData = getDataFromResponse(carsRepsonse);
    const carList = carListReader.cars(carsData);
    const totalPageCount = carListReader.totalPageCount(carsData);
    const totalCarsCount = carListReader.totalCarsCount(carsData);
    dispatch({
        type: ACTION_TYPES.FETCH_CAR_LIST,
        payload: {
            carList,
            totalPageCount,
            totalCarsCount,
        }
    })
}

const saveCarDetails = (dispatch) => (carDetailsRepsonse) => {
    const carData = getDataFromResponse(carDetailsRepsonse);
    const carDetails = carByStockNumberReader.car(carData);
    dispatch({
        type: ACTION_TYPES.FETCH_CAR_DETAILS,
        payload: {
            carDetails,
        }
    })
}

export const fetchCarList = (filterState) =>  {
    return function(dispatch){
        const queryString = getCarListQueryString(filterState);
        getCars(queryString).then(saveCarList(dispatch))
        .catch(() => saveCarList(dispatch)(cars))
    }
}

export const fetchCarDetails = (stockNumber, queryString) =>  {
    return function(dispatch){
        getCarByStockNumber(stockNumber, queryString).then(saveCarDetails(dispatch))
    }
}