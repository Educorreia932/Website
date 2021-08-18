import axios from 'axios'

const API = () => {
    return axios.create({
        baseURL: process.env.VUE_APP_API_ENDPOINT + "/api",
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
