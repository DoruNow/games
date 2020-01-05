function DealCards(deck) {
  let dealtCards = [
    { player0: [] },
    { player1: [] },
    { player2: [] },
    { player3: [] }
  ];
  let deckSize = deck.length;

  [...Array(4).keys()].forEach(player => {
    [...Array(13).keys()].forEach(() => {
      let randomCard = Math.floor(Math.random() * deckSize);
      dealtCards[player]["player" + player].push(deck[randomCard]);
      deck.splice(randomCard, 1);
      deckSize--;
    });
  });
  console.log(dealtCards);
}

export { DealCards };
