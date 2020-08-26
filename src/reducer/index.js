import { FETCH_DATA, FETCH_DATA_SUCCESS } from '../actions/index';
import { createStore } from "redux";

const initialState = {
    data: [],
    appliedFilters: {
        year: null,
        launchSuccess: null,
        landingSuccess: null
    },
    loading: true
};

const store = (state = initialState, action) => {

    switch (action.type) {

        case FETCH_DATA: {
            console.log("fetch data");
            return {
                ...state,
                loading: true
            }
        }

        case FETCH_DATA_SUCCESS: {
            console.log("LOAD data");

            return {
                ...state,
                data: action.payload.data,
                loading: false
            }
        }

        default: {
            return state;
        }
    }
};

export default createStore(store);
