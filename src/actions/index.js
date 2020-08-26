export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const FIRST_QUERY_PARAM = "FIRST_QUERY_PARAM";


export const fetchData = () => ({
    type: FETCH_DATA,
    loading: true
  });
  
  export const loadData = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: { data }
  });

  export const firstQueryParam = isFirstQueryParam => ({
    type: FIRST_QUERY_PARAM,
    payload: {isFirstQueryParam}
  });