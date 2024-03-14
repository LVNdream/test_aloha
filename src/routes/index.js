import { createWebHistory, createRouter } from "vue-router";
import Admin from "@/views/Admin.vue";

const routes = [
    {
        path: "/admin",
        name: "admin",
        component: Admin,
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;