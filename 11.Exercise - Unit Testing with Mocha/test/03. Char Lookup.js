const expect = require("chai").expect

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar", function () {
    it('should return undefined with a non-string first perimeter', function () {
        let result = lookupChar(13, 0)
        expect(result).to.equal(undefined)
    });
    it('should return undefined with a non-number second perimeter', function () {
        let result = lookupChar("pesho", "gosho")
        expect(result).to.equal(undefined)
    });
    it('should return undefined with a floating point number second perimeter', function () {
        let result = lookupChar("pesho", 3.12)
        expect(result).to.equal(undefined)
    });
    it('should return incorrect index with an incorrect index', function () {
        let result = lookupChar("pesho", 13)
        expect(result).to.equal("Incorrect index")
    });
    it('should return incorrect index with an incorrect index', function () {
        let result = lookupChar("pesho", -1)
        expect(result).to.equal("Incorrect index")
    });
    it('should return incorrect index with an incorrect index', function () {
        let result = lookupChar("pesho", 5)
        expect(result).to.equal("Incorrect index")
    });
    it('should return correct value with correct parameters', function () {
        let result = lookupChar("pesho", 0)
        expect(result).to.equal("p")
    });
    it('should return correct value with correct parameters', function () {
        let result = lookupChar("stamat", 3)
        expect(result).to.equal("m")
    });
})
