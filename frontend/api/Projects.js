import API from "./API";

const END_POINT = 'projects';

export default {
    list() {
        return API().get(`${END_POINT}/`);
    },
}