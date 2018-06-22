function add(n) {
    let v = function (x) {
        return add(n + x);
    };

    v.valueOf = v.toString = function () {
        return n;
    };

    return v;
}

var addTwo = +add(1);
console.log(addTwo);
console.log(+addTwo(1)(6)(-3))