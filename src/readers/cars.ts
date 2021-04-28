import _property from 'lodash/property';

const READER = {
    stockNumber: _property('stockNumber'),
    manufacturerName: _property('manufacturerName'),
    modelName: _property('modelName'),
    color: _property('color'),
    fuelType: _property('fuelType'),
    pictureUrl: _property('pictureUrl'),
    mileage: _property('milage'),
}

export default READER;