import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    gameSettings: {
      roomName: "",
      player1: {
        name: ""
      },
      player2: {
        name: ""
      },
      player3: {
        name: ""
      },
      player4: {
        name: ""
      }
    },
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
      state.gameSettings = payload.value.gameSettings;
    },
    setGameSettings(state, payload) {
      state.gameSettings = payload.value.gameSettings;
    }
  }
});

export default store;
