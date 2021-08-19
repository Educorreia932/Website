import API from "./API";

const END_POINT = 'collage';

export default {
    list() {
        return API().get(`${END_POINT}/list`);
    },
}