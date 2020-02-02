import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    gameSettings: {},
    gameState: {
      activeHand: ["", "", "", ""],
      playerActive: null,
      generalScore: [0, 0],
      handsCount: null,
      cardsInHands: {
        player1: [],
        player2: [],
        player3: [],
        player4: []
      }
    }
  },
  mutations: {
    setGameState(state, payload) {
      state.gameState = payload.value;
    },
    setGameSettings(state, payload) {
      state.gameSettings.roomName = payload.value.roomName;
      state.gameSettings["player" + payload.value.playerNo] =
        payload.value.playerName;
    }
  }
});

export default store;
