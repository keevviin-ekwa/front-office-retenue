import API from "./API";

const setAuthToken = (token) => {
    
    if (token) {
        // Apply to every request
        API.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
        // Delete auth header
        delete API.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;