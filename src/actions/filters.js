import ACTION_TYPES from './actionTypes';

//utils
import getDataFromResponse from '../utils/getDataFromResponse';

//services
import { getManufacturers, getColors } from "../services/carsInfo";

//reader
import colorsReader from '../readers/colors';
import manufacturersReader from '../readers/manufacturers';

const saveColors = (dispatch) => (colorsResponse) => {
    const colorsData = getDataFromResponse(colorsResponse);
    const colors = colorsReader.colors(colorsData);
    dispatch({
        type: ACTION_TYPES.FETCH_COLORS,
        payload: {
            colors,
        }
    })
}

const saveManufacturers = (dispatch) => (manufacturersResponse) => {
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
    return function(dispatch){
        getColors().then(saveColors(dispatch))
    }
}

export function fetchManufacturers()  {
    return function(dispatch){
        getManufacturers().then(saveManufacturers(dispatch))
    }
}

export function setFilters (payload) {
    return function(dispatch){
        dispatch({
            type: ACTION_TYPES.SET_FILTERS,
            payload,
        })
        
    }
}