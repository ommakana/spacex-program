import { apiURL, generateApiUrl } from "../api/api";
import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";
export const FIRST_QUERY_PARAM = "FIRST_QUERY_PARAM";

export const fetchingData = () => {
  return {
    type: FETCH_DATA,
    loading: true,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchingData());
    try {
      axios
      .get(`${apiURL}`)
      .then((res) => {
        storeDataLocal(res);
        dispatch(loadData(res.data));
      })
    }
    catch(err) {
      console.log("getting data locally");
      const res = JSON.parse(localStorage.getItem("data"));
      dispatch(loadData(res.data));
    }
  };
};

export const loadData = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { data },
  };
};

export const firstQueryParam = (isFirstQueryParam) => ({
  type: FIRST_QUERY_PARAM,
  payload: { isFirstQueryParam },
});

export const storeDataLocal = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const applyFilters = (filterBy, value) => {
  return (dispatch) => {
    dispatch(fetchingData());
    axios
      .get(generateApiUrl())
      .then((res) => {
        dispatch(loadData(res.data));
      })
      .catch(() => {
        const res = JSON.parse(localStorage.getItem("data"));
        if (res.data) {
          const filteredData = res.data.filter((item) => {
           return item[filterBy] === value
          });
          dispatch(loadData(filteredData));
        } else {
          console.log("no local data found");
        }
      });
  };
};
