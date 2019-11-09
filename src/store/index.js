import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    playerSelected: {
      player1: false,
      player2: false,
      player3: false,
      player4: false
    },
    playerActive: 1,
    hand: ["", "", "", ""],
    score: [0, 0, 0, 0],
    deckSize: 52,
    clockwiseDirection: true,
    totalNumberOfPlayers: 4
  },
  mutations: {
    setNextPlayer(state, payload) {
      state.playerActive = payload.playerActive;
    },
    setPlayCard(state, payload) {
      state.hand[payload.player] = payload.card;
    },
    setDeckSize(state, payload) {
      state.deckSize = payload.numberOfCards;
    },
    setDirection(state, payload) {
      state.clockwiseDirection = payload.clockwiseDirection;
    },
    setTotalNumberOfPlayers(state, payload) {
      state.totalNumberOfPlayers = payload.totalNumberOfPlayers;
    },
    selectPlayer(state, payload) {
      state.playerSelected = payload.playerSelected;
    }
  }
});

export default store;
