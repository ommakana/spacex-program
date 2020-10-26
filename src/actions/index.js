import { apiURL, generateApiUrl } from "../api/api";
import axios from "axios";
import idbKeyval from "../utility/idb-wrapper";
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
    axios
      .get(`${apiURL}`)
      .then((res) => {
        idbKeyval.set("data", res.data);
        dispatch(loadData(res.data));
      })
      .catch(() => {
        console.log("getting data from IDB");
        idbKeyval.get("data").then((data) => dispatch(loadData(data)));
      });
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

export const applyFilters = (filterBy, value) => {
  return (dispatch) => {
    dispatch(fetchingData());
    axios
      .get(generateApiUrl())
      .then((res) => {
        dispatch(loadData(res.data));
      })
      .catch(() => {
        idbKeyval
          .get("data")
          .then((data) => {
            console.log(data);
            const filteredData = data.filter((item) => {
              return item[filterBy] === value;
            });
            dispatch(loadData(filteredData));
          })
          .catch(() => console.log("no local data found"));
      });
  };
};
