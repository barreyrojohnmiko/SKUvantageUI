import { SET_IMAGES, SET_CURRENT_INDEX, SET_IS_LOADING } from './action';

const initialState = {
  images: [],
  currentIndex: 0,
  isLoading: false,
};

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: action.payload };
    case SET_CURRENT_INDEX:
      return { ...state, currentIndex: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default appReducers;
