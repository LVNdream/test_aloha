import { createWebHistory, createRouter } from "vue-router";
import Admin from "@/views/Admin.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";




const routes = [
    {
        path: "/admin",
        name: "admin",
        component: Admin,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;