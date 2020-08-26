export const apiURL = "https://api.spacexdata.com/v3/launches?limit=100";

export const generateApiUrl = () => {
    let params = window.location.search;
    return apiURL+params.replace("?", "&");
}