import axios from 'axios';

export const apiURL = "https://api.spacexdata.com/v3/launches?limit=100";

export const generateApiUrl = () => {
    let params = window.location.search;
    return apiURL+params.replace("?", "&");
}

export const fetchDataOnReload = (params) => {

    let stringParams = JSON.stringify(params);
    stringParams = stringParams.replace(/["{}]+/g, "");
    stringParams = stringParams.replace(/[:]+/g, "=");
    stringParams = "?" + stringParams.replace(/[,]+/g, "&");
    axios.get(`${apiURL}+${stringParams}`).then(data => data);
}