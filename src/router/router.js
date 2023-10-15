import {createRouter, createWebHistory} from "vue-router";
import TodayPage from "@/page/TodayPage"
import UpcomingPage from "@/page/UpcomingPage"


const routes = [
    {
        path: '/',
        component: TodayPage
    },
    {
        path: '/upcoming',
        component: UpcomingPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;
