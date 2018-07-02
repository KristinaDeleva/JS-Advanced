const expect = require("chai").expect

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

describe("Is symmetric", function () {
    describe("True test", function () {
        it('Should return true for [1, 2, 3, 2, 1]', function () {
            //Arrange
            let arr = [1, 2, 3, 2, 1]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(true)
        });
        it('Should return true for [-1, -2, -3, -2, -1]', function () {
            //Arrange
            let arr = [-1, -2, -3, -2, -1]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(true)
        });
        it('Should return true for [1]', function () {
            //Arrange
            let arr = [1]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(true)
        });
        it('Should return true for [5,"hi",{a:5},new Date(),{a:5},"hi",5]', function () {
            //Arrange
            let arr = [5,"hi",{a:5},new Date(),{a:5},"hi",5]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(true)
        });
    })

    describe("False test", function () {
        it('Should return false for [1, 2, 3, 1]', function () {
            //Arrange
            let arr = [1, 2, 3, 1]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(false)
        });
        it('Should return false for [-1, -2, -3, -1]', function () {
            //Arrange
            let arr = [-1, -2, -3, -1]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(false)
        });
        it('Should return false for [1, 2]', function () {
            //Arrange
            let arr = [1, 2]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(false)
        });
        it('Should return false for [5,"hi",{a:5},new Date(),{X:5},"hi",5]', function () {
            //Arrange
            let arr = [5,"hi",{a:5},new Date(),{X:5},"hi",5]
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(false)
        });
        it('Should return false for string', function () {
            //Arrange
            let arr = "string"
            //Act
            let result = isSymmetric(arr)
            //Assert
            expect(result).to.be.equal(false)
        });
    })
})
