import { FETCH_META_DATA } from './actionTypes';
import { getManufacturers, getColors } from "../services/carsInfo";
import colorsReader from '../readers/colors';
import manufacturersReader from '../readers/manufacturers';

const saveMetadata = (dispatch: Function) => ([colorsResponse, manufacturersResponse]: Array<Object>) => {
    const colors = colorsReader.colors(colorsResponse);
    const manufacturers = manufacturersReader.manufacturers(manufacturersResponse);
    dispatch({
        type: FETCH_META_DATA,
        payload: {
            colors,
            manufacturers,
        }
    })

}
export const fetchMetadata = () =>  {
    return function(dispatch: Function){
        const colorPromise = getColors();
        const manufacturersPromise = getManufacturers();
        Promise.all([colorPromise, manufacturersPromise]).then(saveMetadata(dispatch))
    }
}