import { ActionTypes } from '../actions';

const initialState = {
  all: [], // array of all photos
  current: {}, // current individually displaying photo
  next: {}, // the photo that is about to be displayed
  results: {}, // will be a photo-like obj. storing results after user has looked at all photos
};

const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTO:
      return { ...state, current: action.payload.current };
    case ActionTypes.FETCH_RESULTS:
      return { ...state, results: action.payload.results };
    case ActionTypes.CREATE_PHOTO:
      return { ...state, all: action.payload };
    case ActionTypes.GET_NEXT_PHOTO:
      return { ...state, next: action.payload.next };
    default:
      return state;
  }
};
export default PhotoReducer;
