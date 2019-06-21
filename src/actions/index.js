/* eslint-disable no-unused-vars */
import axios from 'axios';
// keys for actiontypes
// eslint-disable-next-line import/prefer-default-export
export const ActionTypes = {
  FETCH_PHOTOS: 'FETCH_PHOTOS',
  FETCH_PHOTO: 'FETCH_PHOTO',
  UPDATE_PHOTO: 'UPDATE_PHOTO',
  CREATE_PHOTO: 'CREATE_PHOTO',
  GET_NEXT_PHOTO: 'GET_NEXT_PHOTO',
  UPDATE_COUNT: 'UPDATE_COUNT',
  FETCH_RESULTS: 'FETCH_RESULTS',
};

const ROOT_URL = 'https://google-vision-test-api.herokuapp.com/api';


export function getNextPhoto() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/photos`).then((response) => {
      dispatch({ type: 'GET_NEXT_PHOTO', payload: { next: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function updatePhoto(photo, id, history) {
  return (dispatch) => {
    const fields = {
      img: photo.img, vis_tag: photo.vis_tag, tag_correct: photo.tag_correct,
    };
    axios.put(`${ROOT_URL}/photos/${id}`, fields).then((response) => {
      dispatch({ type: 'UPDATE_PHOTO' });
    }).catch((error) => {
      console.log(error.response);
    });
  };
}

export function updateCount(tagCorrect) {
  return (dispatch) => {
    const fields = {
      tagCorrect,
    };
    axios.put(`${ROOT_URL}/photos/results`, fields).then((response) => {
      dispatch({ type: 'UPDATE_COUNT' });
    }).catch((error) => {
      console.log(error.response);
    });
  };
}

export function fetchPhoto(id, history) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/photos/${id}`).then((response) => {
      dispatch({ type: 'FETCH_PHOTO', payload: { current: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}

export function fetchResults() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/photos/results`).then((response) => {
      dispatch({ type: 'FETCH_RESULTS', payload: { results: response.data } });
    }).catch((error) => {
      console.log(error);
    });
  };
}
