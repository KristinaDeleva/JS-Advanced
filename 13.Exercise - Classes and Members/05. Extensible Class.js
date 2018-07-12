let ext = (function () {
    let id = 0
    return class Extensible{
        constructor(){
            this.id = id++
        }
        extend(template){
            for (let parent in template) {
                if (typeof (template[parent]) === 'function'){
                   Extensible.prototype[parent] = template[parent]
                }else {
                    this[parent] = template[parent]
                }
            }
        }
    }
}());

let obj1 = new ext();
let obj2 = new ext();
let obj3 = new ext();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);