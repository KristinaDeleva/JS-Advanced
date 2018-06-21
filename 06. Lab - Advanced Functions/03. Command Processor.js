function solve(arr) {
    let commandProcessor = (function () {
        let result = ''
        return {
            'append': (st)=>{result += st},
            'removeStart': (num)=>{result = result.substr(num)},
            'removeEnd': (num)=>{result = result.substr(0, result.length - num)},
            'print': () => {console.log(result)}
        }
    }())

    for (let el of arr) {
        let [command, items] = el.split(' ')
        commandProcessor[command](items)
    }
}
solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'])