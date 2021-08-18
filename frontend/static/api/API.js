import axios from 'axios'

const API = () => {
    return axios.create({
        baseURL: "http://localhost:8000/api",
        xsrfCookieName: "csrftoken",
        xsrfHeaderName: "X-CSRFTOKEN",
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}

export default API;
