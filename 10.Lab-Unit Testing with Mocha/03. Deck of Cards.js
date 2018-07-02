function printDeckOfCards(arr) {
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

    for (let i = 0; i <arr.length; i++) {
        let end = arr[i].length - 1
        let card = arr[i].substring(0, end)
        let suit = arr[i][end]
        try {
            arr[i] = makeCard(card, suit)
        } catch (e){
            console.log('Invalid card: ' + arr[i])
            return
        }
    }

    console.log(arr.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);//A♠ 10♦ K♥ 2♣
printDeckOfCards(['5S', '3D', 'QD', '1C']);//Invalid card: 1C
