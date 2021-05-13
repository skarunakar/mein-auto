import ACTION_TYPES  from '../actions/actionTypes';
import { AnyAction } from 'redux';
const initialState = {
    colors: [],
    manufacturers: [],
    filterState: {
      color: '',
      manufacturer: '',
      sort: 'asc',
      page: 1,
    }
}

const filters = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case ACTION_TYPES.FETCH_COLORS: return {
        ...state,
      colors: action?.payload?.colors,
    };
    case ACTION_TYPES.FETCH_MANUFACTURERS: return {
      ...state,
      manufacturers: action?.payload?.manufacturers,
  };
  case ACTION_TYPES.SET_FILTERS: return {
    ...state,
    filterState: {
      ...state.filterState,
      ...action?.payload
    }
  }
    default: return state;
  }
}

export default filters;
