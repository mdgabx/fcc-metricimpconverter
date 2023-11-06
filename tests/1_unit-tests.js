const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("convertHandler should correctly read a whole number input", function () {
        let input = "5kg";
        let result = convertHandler.getNum(input);
        assert.equal(result, 5, "Whole number should display without unit");
    });

    test("convertHandler should correctly read a decimal number input", function () {
        let input = "5.2mi";
        let result = convertHandler.getNum(input);
        assert.equal(result, 5.2, "Decimal number should display in this ");
    });

    test("convertHandler should correctly read a fractional input", function () {
        let input = "1/2L";
        let result = convertHandler.getNum(input);
        assert.equal(result, 0.5, "Fractions are accepted as input");
    });

    test("convertHandler should correctly read a fractional input with a decimal", function () {
        let input = "1.5kg";
        let result = convertHandler.getNum(input);
        assert.equal(result, 1.5, "Fractional input with decimal point is incorrect");
    });

    test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", function () {
        let input = "3/2/3";
        let result = convertHandler.getNum(input);
        console.log(result)
        assert.equal(result, undefined, "A message invalid number is shown");
    })


});