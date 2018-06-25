function processor(arr) {
    let commandExecutor = (function () {
      let result = []
      function add(str) {
          result.push(str)
      }
      function remove(str) {
          result = result.filter(el => el !== str)
      }
      function print() {
          console.log(result.join(','))
      }
      return {add, remove, print}
    }())

    for (let el of arr) {
        let[command, value] = el.split(' ')
        commandExecutor[command](value)
    }
}
processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])