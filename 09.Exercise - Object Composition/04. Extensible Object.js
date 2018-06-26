function solve() {
    let obj = {
        extend: function (template) {
            for(let parent in template){
                if(typeof(template[parent]) === "function"){
                    Object.getPrototypeOf(obj)[parent] = template[parent];
                } else {
                    obj[parent] = template[parent];
                }
            }
        }
    }
    return obj
}