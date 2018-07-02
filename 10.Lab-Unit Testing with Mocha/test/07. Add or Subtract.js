const expect = require("chai").expect;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('Create calculator test', function () {
    let calc
    beforeEach(function () {
        calc = createCalculator()
    });
    describe('Add', function () {
        it("should return 0 after initialization", function () {
            let result = calc.get()
            expect(result).to.be.equal(0)
        });
        it("should return 5 after add 5", function () {
            calc.add(5)
            let result = calc.get()
            expect(result).to.be.equal(5)
        });
        it("should return 10 after add(5), add(5)", function () {
            calc.add(5)
            calc.add(5)
            let result = calc.get()
            expect(result).to.be.equal(10)
        });
        it("should return 11 after add(5.5), add(5.5)", function () {
            calc.add(5.5)
            calc.add(5.5)
            let result = calc.get()
            expect(result).to.be.equal(11)
        });
        it("should return -11 after add(-5.5), add(-5.5)", function () {
            calc.add(-5.5)
            calc.add(-5.5)
            let result = calc.get()
            expect(result).to.be.equal(-11)
        });
        it("should return 11 after add('5.5'), add('5.5')", function () {
            calc.add('5.5')
            calc.add('5.5')
            let result = calc.get()
            expect(result).to.be.equal(11)
        });
        it("should return NaN after add('string')", function () {
            calc.add('string')
            let result = calc.get()
            expect(result).to.be.NaN
        });
    })

    describe("Subtract", function () {
        it('should return 0 after subtract 0', function () {
            calc.subtract(0)
            let result = calc.get()
            expect(result).to.be.equal(0)
        });
        it('should return -5 after subtract 5', function () {
            calc.subtract(5)
            let result = calc.get()
            expect(result).to.be.equal(-5)
        });
        it('should return -10 after subtract(5), subtract(5)', function () {
            calc.subtract(5)
            calc.subtract(5)
            let result = calc.get()
            expect(result).to.be.equal(-10)
        });
        it('should return -11 after subtract(5.5), subtract(5.5)', function () {
            calc.subtract(5.5)
            calc.subtract(5.5)
            let result = calc.get()
            expect(result).to.be.equal(-11)
        });
        it('should return 11 after subtract(-5.5), subtract(-5.5)', function () {
            calc.subtract(-5.5)
            calc.subtract(-5.5)
            let result = calc.get()
            expect(result).to.be.equal(11)
        });
        it("should return NaN after subtract('5.5')", function () {
            calc.subtract('string')
            let result = calc.get()
            expect(result).to.be.NaN
        });
    })

    describe("Add in combination with Subtract", function () {
        it('should return 10', function () {
            calc.add(10)
            calc.add(10)
            calc.add(5)
            calc.subtract(15)
            let result = calc.get()
            expect(result).to.be.equal(10)
        });
        it('should return 15', function () {
            calc.subtract(10)
            calc.subtract(10)
            calc.add(50)
            calc.subtract(15)
            let result = calc.get()
            expect(result).to.be.equal(15)
        });
    })
})