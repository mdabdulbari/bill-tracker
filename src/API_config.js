const LOCAL = "http://localhost:5000";
const PRODUCTION = "https://da3j4qd5k8.execute-api.ap-south-1.amazonaws.com/latest";

let API_BASE_URL = LOCAL;

if (process.env.REACT_APP_ENV === "prod") {
    API_BASE_URL = PRODUCTION
};

export default API_BASE_URL;