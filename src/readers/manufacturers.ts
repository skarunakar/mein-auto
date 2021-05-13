import _property from 'lodash/property';

const READER = {
    manufacturers: _property('manufacturers'),
    name: _property('name'),
    models: _property('models'),
}

export default READER;