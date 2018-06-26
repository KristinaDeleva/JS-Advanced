function sortedList() {
    return {
        arr: [],
        size: 0,
        add: function (element) {
            this.arr.push(element)
            this.size++
            this.arr.sort((a, b)=> a - b)
        },
        remove: function (index) {
            if (index >= 0 && index < this.arr.length){
                this.arr.splice(index, 1)
                this.size--
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.arr.length){
                return this.arr[index]
            }
        }
    }
}
let sorted = sortedList()
console.log('start size: ' + sorted.size)
sorted.add(3)
sorted.add(5)
sorted.add(2)
sorted.add(4)
sorted.add(1)
console.log(sorted.arr.toString())
sorted.remove(2)
console.log('Sorted list: ' + sorted.arr.toString())
console.log('Get index: ' + sorted.get(0))
console.log('End size: ' + sorted.size)