export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = () => ({
    type: FETCH_DATA,
    loading: true
  });
  
  export const loadData = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: { data }
  });