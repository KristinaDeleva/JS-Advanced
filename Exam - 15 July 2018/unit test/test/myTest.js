let expect = require('chai').expect
let Calculator = require('../02. Calculator Class')

describe('Calculator', function () {
    describe('constructor', function () {
        it('should return 0', function () {
            let list = new Calculator([])
            expect(list.expenses.length).to.equal(0)
        });
    })
    describe('add', function () {
        it('should return added elements to expenses', function () {
            let list = new Calculator()
            list.add(123)
            list.add(-123)
            list.add(12.3)
            list.add('gosho')
            list.add({})
            list.add([])
            expect(list.toString()).to.equal('123 -> -123 -> 12.3 -> gosho -> [object Object] -> ')
        });
    });
    describe('divideNums', function () {
        it('should return errors', function () {
            let list = new Calculator()
            list.add(0)
            list.add(1)
            for (let i = 0; i < list.expense; i++) {
                if (list.expenses[i] === 0) {
                    expect(list.divideNums()).to.equal('Cannot divide by zero')
                }
            }
        });
        it('should return 4', function () {
            let list = new Calculator()
            list.add(20)
            list.add(5)
            expect(list.divideNums()).to.equal(4)
        });
        it('should return 5.1', function () {
            let list = new Calculator()
            list.add(20.5)
            list.add(5)
            expect(list.divideNums()).to.closeTo(4.1, 0.01)
        });
        it('should return 4', function () {
            let list = new Calculator()
            list.add(-20)
            list.add(-5)
            expect(list.divideNums()).to.closeTo(4, 0.01)
        });
        it('should return -4', function () {
            let list = new Calculator()
            list.add(-20)
            list.add(5)
            expect(list.divideNums()).to.closeTo(-4, 0.01)
        });
        it('should return error', function () {
            let list = new Calculator()
            list.add('pesho')
            list.add('gosho')
            expect(() => list.divideNums()).to.throw(Error);
        });
        it('should return error', function () {
            let list = new Calculator()
            list.add({})
            list.add([])
            expect(() => list.divideNums()).to.throw(Error);
        });
    })
    describe('toString', function () {
        it('should return correct result', function () {
            let list = new Calculator()
            list.add(123)
            list.add(-123)
            list.add(12.3)
            list.add('gosho')
            expect(list.toString()).to.equal('123 -> -123 -> 12.3 -> gosho')
        });
        it('should return empty array', function () {
            let list = new Calculator()
            expect(list.toString()).to.equal('empty array')
        });
    })
    describe('orderBy', function () {
        it('should return numbers', function () {
            let list = new Calculator()
            list.add(150)
            list.add(15)
            list.add(5)
            list.add(230)
            expect(list.orderBy()).to.equal('5, 15, 150, 230')
        });
        it('should return strings', function () {
            let list = new Calculator()
            list.add('pesho')
            list.add('gosho')
            list.add('stamat')
            expect(list.orderBy()).to.equal('gosho, pesho, stamat')
        });
        it('should return empty', function () {
            let list = new Calculator()
            expect(list.orderBy()).to.equal('empty')
        });
    })
})