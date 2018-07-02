function makeCard(card, suit) {
    let validCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuit = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (validCard.indexOf(card) < 0 || !validSuit.hasOwnProperty(suit)){
        throw new Error("Invalid card or suit!")
    }

    return {
        toString: function () {
            return card + validSuit[suit]
        }
    }
}
console.log('' + makeCard('A', 'S'));//A♠
console.log('' + makeCard('10', 'H'));//10♥
console.log('' + makeCard('1', 'C'));//Invalid card or suit!
