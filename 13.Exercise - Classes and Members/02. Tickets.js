function tickets(arr, criteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let result = []

    for (let el of arr) {
        let[destination, price, status] = el.split('|')
        price = Number(price)
        result.push(new Ticket(destination, price, status))
    }

    // let sorted
    // switch (criteria){
    //     case "destination":
    //         sorted = result.sort((a, b) => a.destination.localeCompare(b.destination));
    //         break;
    //     case 'price':
    //         sorted = result.sort((a, b) => a.price - b.price);
    //         break;
    //     case 'status':
    //         sorted = result.sort((a, b) => a.status.localeCompare(b.status))
    //         break;
    // }
    // return sorted

    result.sort((a, b) => a[criteria] > b[criteria]) // this is same
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));