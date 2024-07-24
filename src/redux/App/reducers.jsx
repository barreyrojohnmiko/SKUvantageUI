import {
  SET_IS_MOBILE_VIEW,
  SET_PAGE_COUNT,
  SET_IS_LOADING,
  SET_ENTLADUNG,
  SET_STAPLER,
  SET_HUBWAGEN,
  SET_MITNAHMESTAPLER,
  SET_RANGIERFLACHE,
  SET_CHECKED,
  SET_EXPANDED_STATE,
  SET_FORM_DATA,
  SET_IS_SIDEBAR_OPEN,
  SET_SEARCH_TERM,
} from "./action";

const initialState = {
  isMobileView: false,
  pageCount: 1,
  isLoading: false,
  entladung: "",
  stapler: "",
  hubwagen: "",
  mitnahmestapler: "",
  rangierflache: "",
  checked: {
    sattelzug: false,
    motorwagenAnhaenger: false,
    motorwagen: false,
    unloading: false,
    ruckruf: false,
  },
  expandedState: {
    hauptansprechpartner: true,
    alternativer: true,
  },
  formData: [],
  isSidebarOpen: false,
  searchTerm: "",
};

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MOBILE_VIEW:
      return { ...state, isMobileView: action.payload };
    case SET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_ENTLADUNG:
      return { ...state, entladung: action.payload };
    case SET_STAPLER:
      return { ...state, stapler: action.payload };
    case SET_HUBWAGEN:
      return { ...state, hubwagen: action.payload };
    case SET_MITNAHMESTAPLER:
      return { ...state, mitnahmestapler: action.payload };
    case SET_RANGIERFLACHE:
      return { ...state, rangierflache: action.payload };
    case SET_CHECKED:
      return { ...state, checked: action.payload };
    case SET_EXPANDED_STATE:
      return { ...state, expandedState: action.payload };
    case SET_FORM_DATA:
      return { ...state, formData: action.payload };
    case SET_IS_SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default appReducers;
