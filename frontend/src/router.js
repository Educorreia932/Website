import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import AboutMe from "@/views/AboutMe";
import Projects from "@/views/Projects";

const routes = [
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {
        path: "/about_me",
        component: AboutMe,
        name: "about_me"
    },
    {
        path: "/projects",
        component: Projects,
        name: "projects"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;