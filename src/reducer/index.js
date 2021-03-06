import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FIRST_QUERY_PARAM,
} from "../actions/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  data: [],
  loading: true,
  isFirstQueryParam: true,
};

const store = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    }

    case FIRST_QUERY_PARAM: {
      return {
        ...state,
        isFirstQueryParam: action.payload.isFirstQueryParam,
      };
    }

    default: {
      return state;
    }
  }
};

export default createStore(store, applyMiddleware(thunk));
