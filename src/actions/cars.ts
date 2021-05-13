import ACTION_TYPES from './actionTypes';
import { Dispatch } from 'redux';

//utils
import getDataFromResponse from '../utils/getDataFromResponse';
import { getCarListQueryString } from '../utils/getQueryString';

//services
import { getCars, getCarByStockNumber } from "../services/carsInfo";

//readers
import carListReader from '../readers/carList';
import carByStockNumberReader from '../readers/carByStockNumber';

import { FilterState } from '../interfaces.constants';

const saveCarList = (dispatch: Dispatch) => (carsRepsonse: object) => {
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

const saveCarDetails = (dispatch: Dispatch) => (carDetailsRepsonse: object) => {
    const carData = getDataFromResponse(carDetailsRepsonse);
    const carDetails = carByStockNumberReader.car(carData);
    dispatch({
        type: ACTION_TYPES.FETCH_CAR_DETAILS,
        payload: {
            carDetails,
        }
    })
}

export const fetchCarList = (filterState: FilterState) =>  {
    return function(dispatch: Dispatch){
        const queryString = getCarListQueryString(filterState);
        getCars(queryString).then(saveCarList(dispatch))
    }
}

export const fetchCarDetails = (stockNumber: string, queryString: string) =>  {
    return function(dispatch: Dispatch){
        getCarByStockNumber(stockNumber, queryString).then(saveCarDetails(dispatch))
    }
}