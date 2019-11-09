import Vue from "vue";
import VueRouter from "vue-router";
import GameSetupView from "../views/GameSetupView.vue";
import PlayerView from "../views/PlayerView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: GameSetupView
  },
  {
    path: "/player/:gameId/:id/:playerNo",
    name: "player",
    component: PlayerView
  },
  {
    path: "/table/:gameId",
    name: "table",
    component: () => import("../views/PlayingTableView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
