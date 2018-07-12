class SortedList {
    constructor(){
        this.list = []
        this.size = 0
    }

	add(elemenent){
        this.list.push(elemenent)
        this.list.sort((a, b) => a - b)
        this.size++
        return this.list
    }

	remove(index){
        if (index >= 0 && index < this.list.length){
            this.list.splice(index, 1)//this is removed
            this.list.sort((a, b) => a - b)
            this.size--
            return this.list
        }
    }

	get(index){
        if (index >= 0 && index < this.list.length){
            return this.list[index]
        }
    }
}