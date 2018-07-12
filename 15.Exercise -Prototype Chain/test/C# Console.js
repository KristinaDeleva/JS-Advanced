let expext = require('chai').expect;
let Console = require('../05. C# Console').Console;

describe("class Console static writeLine", function () {
    it("should return the same string for single string argument", function () {
        let string = "One single string";
        expext(Console.writeLine(string)).to.equal(string);
    });
    it("should return JSON string for single object argument", function () {
        let object = {name: "Pesho", age: 32};
        expext(Console.writeLine(object)).to.equal(JSON.stringify(object))
    });
    it("should throw error if no arguments were given", function () {
        expext(() => Console.writeLine()).to.throw(TypeError);
    });
    it("should throw error if first argument is not string", function () {
        expext(() => Console.writeLine(5, 1, 2)).to.throw(TypeError)
    });
    it("should throw error if placeholders are less than arguments", function () {
        let string = "This {0} should {1} replaced.";
        expext(() => Console.writeLine(string, "one", "be", "three")).to.throw(RangeError);
    });
    it("should throw error if place of placeholders is changed", function () {
        let string = "This {0} should {0} replaced.";
        expext(() => Console.writeLine(string, "one", "be")).to.throw(RangeError);
    });
    it("should successfully replace placeholders with valid arguments", function () {
        let string = "This {0} should {1} replaced.";
        expext(Console.writeLine(string, "one", "be")).to.equal("This one should be replaced.");
    });
    it("should throw error if invalid placeholder is given", function () {
        let string = "This {0} should {1} replaced. This one {2} not work.";
        expext(() => Console.writeLine(string, "one", "be")).to.throw(RangeError);
    });
    it("should recognize the placeholder numbers well", function () {
        expext(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
    });
});