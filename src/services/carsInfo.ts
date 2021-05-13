import http from './http';

export const getCars = (queryString = '') =>  http.get(`api/cars?${queryString}`);

export const getColors = ()  => http.get(`api/colors`);

export const getManufacturers = ()=>  http.get(`api/manufacturers`);

export const getCarByStockNumber = (stockNumber: string, queryString: string) => http.get(`api/cars/${stockNumber}?${queryString}`);