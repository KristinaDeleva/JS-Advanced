function euclids(a, b) {
    if (!b){
        return a;
    }
    return euclids(b, a % b)
}
console.log(euclids(252, 105));