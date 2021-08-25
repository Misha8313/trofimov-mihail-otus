import { createRouter, createWebHistory } from "vue-router";

import Settings from "../components/Settings.vue"
import Game from "../components/Game.vue"
import Score from "../components/Score.vue"

const routes = [
    {
        path: "/",
        name: "Настройки",
        component: Settings,
    },
    {
        path: "/game",
        props: true,
        name: "Играть",
        component: Game
    },
    {
        path: "/score",
        props: true,
        name: "Результат",
        component: Score
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from) => {
    console.log(to, from);
    return true;
});

export default router;