import http from './http';

export const getCars = queryString => http.get(`api/cars?${queryString}`);

export const getColors = ( queryString = '')  => http.get(`api/colors?${queryString}`);

export const getManufacturers = queryString =>  http.get(`api/manufacturers?${queryString}`);

export const getCarByStockNumber = (stockNumber, queryString) => http.get(`api/cars/${stockNumber}?${queryString}`);