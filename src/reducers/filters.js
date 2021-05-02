import ACTION_TYPES  from '../actions/actionTypes';
const initialState = {
    colors: [],
    manufacturers: [],
    filterState: {
      color: undefined,
      manufacturer: undefined,
      sort: 'asc'
    }
}

const metadata = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.FETCH_COLOR: return {
        ...state,
      colors: action?.payload?.colors,
    };
    case ACTION_TYPES.FETCH_MANUFACTURERS: return {
      ...state,
      manufacturers: action?.payload?.manufacturers,
  };
    default: return state;
  }
}

export default metadata;
