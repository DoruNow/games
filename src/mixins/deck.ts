const deck = {
    methods: {
        setRange(selectedRange: ('all' | 'sevenAndUp')): void {
            let skip;
            switch (selectedRange) {
                case 'all':
                    skip = 0;
                    break;
                case 'sevenAndUp':
                    skip = 6;
                    break;

                default: 0
                    break;
            }
            this.buildDeck(skip)
        },
        buildDeck(skip: Number): object[] {
            const cardTypes = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
            let deck = []
            cardTypes.forEach(type => {
                [...Array(13).keys()].forEach(element => {
                    // skipping 0 avoids confusion when mapping the cards
                    if (element === 0 || (skip > 0 && element <= skip)) {
                        return
                    }
                    deck.push({ type, element })
                });
            });
            return deck
        }
    },
}