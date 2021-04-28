import { FETCH_META_DATA } from '../actions/actionTypes';
const initialState = {
    colors: [],
    manufacturers: [],
}

interface Payload {
    colors: Array<string>,
    manufacturers: Object,
}

interface Action  {
    type: string,
    payload: Payload,
}
const metadata = (state = initialState, action: Action) => {
  switch(action.type) {
    case FETCH_META_DATA: return {
        ...state,
        colors: action?.payload?.colors,
        manufacturers: action?.payload?.manufacturers
    };
    default: return state;
  }
}

export default metadata;
