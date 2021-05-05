import _property from 'lodash/property';

const READER = {
    cars: _property('cars'),
    totalPageCount: _property('totalPageCount'),
    totalCarsCount: _property('totalCarsCount'),
}

export default READER;