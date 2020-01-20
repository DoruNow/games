import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    playerName: {
      player1: "",
      player2: "",
      player3: "",
      player4: ""
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
    roomName: ""
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
    },
    setRoomName(state, payload) {
      state.roomName = payload.value.roomName;
    },
    setPlayerName(state, payload) {
      state.playerName["player" + payload.value.playerNo] =
        payload.value.playerName;
    }
  }
});

export default store;
