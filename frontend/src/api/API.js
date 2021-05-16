import axios from 'axios'

const API = () => {
    let API_URL = "http://localhost:8000";

    return axios.create({
        baseURL: API_URL,
        xsrfCookieName: "csrftoken",
        xsrfHeaderName: "X-CSRFTOKEN",
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export default API;
