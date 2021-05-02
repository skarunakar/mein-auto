import ACTION_TYPES from './actionTypes';
import getDataFromResponse from '../utils/getDataFromResponse';
import { getManufacturers, getColors } from "../services/carsInfo";
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
export const fetchColors = () =>  {
    return function(dispatch){
        getColors().then(saveColors(dispatch))
    }
}

export const fetchManufacturers = () =>  {
    return function(dispatch){
        getManufacturers.then(saveManufacturers(dispatch))
    }
}