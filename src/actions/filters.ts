import ACTION_TYPES from './actionTypes';
import { Dispatch } from 'redux';

//utils
import getDataFromResponse from '../utils/getDataFromResponse';

//services
import { getManufacturers, getColors } from "../services/carsInfo";

//reader
import colorsReader from '../readers/colors';
import manufacturersReader from '../readers/manufacturers';

const saveColors = (dispatch: Dispatch) => (colorsResponse: object) => {
    const colorsData = getDataFromResponse(colorsResponse);
    const colors = colorsReader.colors(colorsData);
    dispatch({
        type: ACTION_TYPES.FETCH_COLORS,
        payload: {
            colors,
        }
    })
}

const saveManufacturers = (dispatch: Dispatch) => (manufacturersResponse: object) => {
    const manufacturersData = getDataFromResponse(manufacturersResponse);
    const manufacturers = manufacturersReader.manufacturers(manufacturersData);
    dispatch({
        type: ACTION_TYPES.FETCH_MANUFACTURERS,
        payload: {
            manufacturers,
        }
    })

}
export function fetchColors()  {
    return function(dispatch: Dispatch){
        getColors().then(saveColors(dispatch))
    }
}

export function fetchManufacturers()  {
    return function(dispatch: Dispatch){
        getManufacturers().then(saveManufacturers(dispatch))
    }
}

export function setFilters (payload: object) {
    return function(dispatch: Dispatch){
        dispatch({
            type: ACTION_TYPES.SET_FILTERS,
            payload,
        })
        
    }
}