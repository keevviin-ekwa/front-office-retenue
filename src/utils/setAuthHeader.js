import API from "./API";

const setAuthHeader = (token) => {
  if (token) {
    // Apply to every request
    API.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // Delete auth header
    delete API.defaults.headers.common["Authorization"];
  }
};

export default setAuthHeader;
