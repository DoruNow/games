import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    playerSelected: {
      player1: "Miti",
      player2: "Piti",
      player3: "Diti",
      player4: "Chiti"
    },
    cardsInHands: {
      player1: [],
      player2: [],
      player3: [],
      player4: []
    },
    playerActive: 1,
    activeHand: ["", "", "", ""],
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
    },
    setCardsInHands(state, payload) {
      state.cardsInHands = payload.cardsInHands;
    }
  }
});

export default store;
