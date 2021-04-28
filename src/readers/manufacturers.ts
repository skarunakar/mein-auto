import _property from 'lodash/property';

const READER = {
    manufacturers: _property('manufacturers'),
    name: _property('name'),
    model: _property('property'),
}

export default READER;