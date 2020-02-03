import Vue from "vue";
import VueRouter from "vue-router";
import GameSetupView from "../views/GameSetupView.vue";
import StartGameView from "../views/StartGameView.vue";
import PlayView from "../views/PlayView.vue";
import DisplayLinks from "../components/DisplayLinks.vue";
import Player from "../components/Player.vue";
import Table from "../components/Table.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: StartGameView
  },
  {
    path: "/settings",
    component: GameSetupView,
    children: [
      {
        path: "link-setup/:playerName/:roomName/:playerSelection",
        component: DisplayLinks
      }
    ]
  },
  {
    path: "/play",
    component: PlayView,
    children: [
      {
        path: "/player/:playerNo",
        component: Player
      },
      {
        path: "/room/:roomName",
        component: Table
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
