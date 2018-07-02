const expect = require("chai").expect

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it('should return undefined with a non-number parameters', function () {
            let result = mathEnforcer.addFive("5")
            expect(result).to.be.equal(undefined)
        });
        it('should return correct value with a integer number parameters', function () {
            let result = mathEnforcer.addFive(5)
            expect(result).to.be.equal(10)
        });
        it('should return correct value with a negative number parameters', function () {
            let result = mathEnforcer.addFive(-5)
            expect(result).to.be.equal(0)
        });
        it('should return correct value with a floating number parameters', function () {
            let result = mathEnforcer.addFive(3.14)
            expect(result).to.be.closeTo(8.14, 0.01)
        });
    })
    describe('subtractTen', function () {
        it('should return undefined with a non-number parameters', function () {
            let result = mathEnforcer.subtractTen("5")
            expect(result).to.be.equal(undefined)
        });
        it('should return correct value with a integer number parameters', function () {
            let result = mathEnforcer.subtractTen(20)
            expect(result).to.be.equal(10)
        });
        it('should return correct value with a negative number parameters', function () {
            let result = mathEnforcer.subtractTen(-5)
            expect(result).to.be.equal(-15)
        });
        it('should return correct value with a floating number parameters', function () {
            let result = mathEnforcer.subtractTen(10.53)
            expect(result).to.be.closeTo(0.53, 0.01)
        });
    });

    describe("sum", function () {
        it('should return undefined with a non-number first parameters', function () {
            let result = mathEnforcer.sum("5", 15)
            expect(result).to.be.equal(undefined)
        });
        it('should return undefined with a non-number second parameters', function () {
            let result = mathEnforcer.sum(5, "5")
            expect(result).to.be.equal(undefined)
        });
        it('should return correct value with a correct parameters', function () {
            let result = mathEnforcer.sum(5, -3)
            expect(result).to.be.equal(2)
        });
        it('should return correct value with a correct parameters', function () {
            let result = mathEnforcer.sum(1.11, 2.22)
            expect(result).to.be.closeTo(3.33, 0.01)
        });
    })
})