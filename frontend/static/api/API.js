import axios from 'axios'

const API = () => {
    return axios.create({
        baseURL: process.env.baseURL + "/api",
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
