function rectangles(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function () {
                return this.width * this.height
            },
            compareTo(other){
                let areaDiff = other.area() - this.area()
                if (areaDiff === 0){
                    return other.width - this.width
                }
                return areaDiff
            }
        }
    }
    return matrix.sort((a, b) => a.compareTo(b))
}

console.log(rectangles([[10, 5], [5, 12]]));