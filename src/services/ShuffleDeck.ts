// Built with flexibility in mind

export class ShuffleDeck {
  // setDeck(selectedRange) {
  //   let skip;
  //   switch (selectedRange) {
  //     case "sevenAndUp":
  //       skip = 6;
  //       break;
  //     default:
  //       skip = 0;
  //       break;
  //   }
  //   return this.buildDeck(skip);
  // }

  buildDeck(skip) {
    const cardTypes = ["Spades", "Hearts", "Diamonds", "Clubs"];
    let deck = [];
    cardTypes.forEach(type => {
      [...Array(14).keys()].forEach(value => {
        // skipping 0 avoids confusion when mapping the cards
        if (value === 0 || (skip > 0 && value <= skip)) {
          return;
        }
        deck.push({ type, value });
      });
    });
    return deck;
  }

  dealCards(deck) {
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
    return dealtCards;
  }

  shuffleDeck() {
    return this.dealCards(this.buildDeck(0));
  }
}
