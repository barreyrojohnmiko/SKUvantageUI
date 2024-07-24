export const SET_IMAGES = 'SET_IMAGES';
export const SET_CURRENT_INDEX = 'SET_CURRENT_INDEX';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setImages = (images) => (dispatch) => {
  dispatch({
    type: SET_IMAGES,
    payload: images,
  });
};

export const setCurrentIndex = (currentIndex) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_INDEX,
    payload: currentIndex,
  });
};

export const setIsLoading = (isLoading) => (dispatch) => {
  dispatch({
    type: SET_IS_LOADING,
    payload: isLoading,
  });
};
