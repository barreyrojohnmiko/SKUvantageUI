export const SET_IS_MOBILE_VIEW = "SET_IS_MOBILE_VIEW";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_IS_LOADING = "SET_IS_LOADING";

export const SET_ENTLADUNG = "SET_ENTLADUNG";
export const SET_STAPLER = "SET_STAPLER";
export const SET_HUBWAGEN = "SET_HUBWAGEN";
export const SET_MITNAHMESTAPLER = "SET_MITNAHMESTAPLER";
export const SET_RANGIERFLACHE = "SET_RANGIERFLACHE";
export const SET_CHECKED = "SET_CHECKED";
export const SET_EXPANDED_STATE = "SET_EXPANDED_STATE";
export const SET_FORM_DATA = "SET_FORM_DATA";
export const SET_IS_SIDEBAR_OPEN = "SET_IS_SIDEBAR_OPEN";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const setIsMobileView = (isMobileView) => (dispatch) => {
  dispatch({
    type: SET_IS_MOBILE_VIEW,
    payload: isMobileView,
  });
};

export const setPageCount = (pageCount) => (dispatch) => {
  dispatch({
    type: SET_PAGE_COUNT,
    payload: pageCount,
  });
};

export const setIsLoading = (isLoading) => (dispatch) => {
  dispatch({
    type: SET_IS_LOADING,
    payload: isLoading,
  });
};

export const setEntladung = (entladung) => (dispatch) => {
  dispatch({
    type: SET_ENTLADUNG,
    payload: entladung,
  });
};

export const setStapler = (stapler) => (dispatch) => {
  dispatch({
    type: SET_STAPLER,
    payload: stapler,
  });
};

export const setHubwagen = (hubwagen) => (dispatch) => {
  dispatch({
    type: SET_HUBWAGEN,
    payload: hubwagen,
  });
};

export const setMitnahmestapler = (mitnahmestapler) => (dispatch) => {
  dispatch({
    type: SET_MITNAHMESTAPLER,
    payload: mitnahmestapler,
  });
};

export const setRangierflache = (rangierflache) => (dispatch) => {
  dispatch({
    type: SET_RANGIERFLACHE,
    payload: rangierflache,
  });
};

export const setChecked = (checked) => (dispatch) => {
  dispatch({
    type: SET_CHECKED,
    payload: checked,
  });
};

export const setExpandedState = (expandedState) => (dispatch) => {
  dispatch({
    type: SET_EXPANDED_STATE,
    payload: expandedState,
  });
};

export const setFormData = (formData) => (dispatch) => {
  dispatch({
    type: SET_FORM_DATA,
    payload: formData,
  });
};

export const setIsSidebarOpen = (isSidebarOpen) => (dispatch) => {
  dispatch({
    type: SET_IS_SIDEBAR_OPEN,
    payload: isSidebarOpen,
  });
};

export const setSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  });
};
