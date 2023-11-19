const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    suite('convertHandler unit test', function () {
        test("convertHandler should correctly read a whole number input", function (done) {
            let input = "5kg";
            let result = convertHandler.getNum(input);
            assert.equal(result, 5, "Whole number should display without unit");
            done();
        });
    
        test("convertHandler should correctly read a decimal number input", function (done) {
            let input = "5.2mi";
            let result = convertHandler.getNum(input);
            assert.equal(result, 5.2, "Decimal number should display in this ");
            done();
        });
    
        test("convertHandler should correctly read a fractional input", function (done) {
            let input = "1/2L";
            let result = convertHandler.getNum(input);
            assert.equal(result, 0.5, "Fractions are accepted as input");
            done();
        });
    
        test("convertHandler should correctly read a fractional input with a decimal", function (done) {
            let input = "1.5kg";
            let result = convertHandler.getNum(input);
            assert.equal(result, 1.5, "Fractional input with decimal point is incorrect");
            done();
        });
    
        test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)", function (done) {
            let input = "3/2/3";
            let result = convertHandler.getNum(input);
            assert.equal(result, undefined, "A message invalid number is shown");
            done();
        })

        test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided." , function (done) {
            let input = "gal";
            let result = convertHandler.getNum(input);
            assert.notEqual(result, undefined, "a default value should be outputted if unit is just added")
            done();
        })

        test("convertHandler should correctly read each valid input unit.", function (done) {
            let input = ["gAl", "L", "KG", "lBs", "km", "mi"]
            let output = ["gal", "L", "kg", "lbs", "km", "mi"]

            input.forEach(function(ele, index) {
                assert.equal(convertHandler.getUnit(ele), output[index])
            });

            done();
        })

        test("convertHandler should correctly return an error for an invalid input unit.", function(done) {
            let input = "smapleUnit";
            let result = convertHandler.getUnit(input)
            assert.equal(result, undefined, "error in unit validation failed")

            done();
        })

        test("convertHandler should return the correct return unit for each valid input unit.", function (done) {
            let input = ["gal", "L", "lbs", "kg", "mi", "km"]
            let output = ["L", "gal", "kg", "lbs", "km", "mi"]     
            
            input.forEach(function(el, index) {
                assert.equal(convertHandler.getReturnUnit(el), output[index])
            })

            done();
        })

        test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", function(done) {
            let input = ["gal", "L", "lbs", "kg", "mi", "km"]
            let output = ["gallons", "liters", "pounds", "kilograms", "miles", "kilometers"]

            input.forEach(function(el, index) {
                assert.equal(convertHandler.spellOutUnit(el), output[index])
            })

            done();
        })

        test("convertHandler should correctly convert gal to L", function (done) {
            let input = "4.2gal";
            let initNum = convertHandler.getNum(input)
            let initUnit = convertHandler.getUnit(input)
            let result = convertHandler.convert(initNum, initUnit)
            assert.equal(result, "15.89872", "gal to L convertion error")

            done();
    
        })

        test("convertHandler should correctly convert L to gal.", function (done) {
            let input = "3L";
            let initNum = convertHandler.getNum(input)
            let initUnit = convertHandler.getUnit(input)
            let result = convertHandler.convert(initNum, initUnit)
            assert.equal(result, "0.79252", "L to gal convertion error")

            done();
        })


        test("convertHandler should correctly convert mi to km.", function (done) {
            let input = "1.2mi";
            let initNum = convertHandler.getNum(input)
            let initUnit = convertHandler.getUnit(input)
            let result = convertHandler.convert(initNum, initUnit)
            assert.equal(result, "1.93121", "mi to km convertion error")

            done();
        })

        test("convertHandler should correctly convert km to mi.", function (done) {
            let input = "3/5km"
            let initNum = convertHandler.getNum(input)
            let initUnit = convertHandler.getUnit(input)
            let result = convertHandler.convert(initNum, initUnit)
            assert.equal(result, "0.37282", "km to mi convertion error.")

            done();
        })

        test("convertHandler should correctly convert lbs to kg.", function (done) {
            let input = "5.4/3lbs"
            let initNum = convertHandler.getNum(input)
            let initUnit = convertHandler.getUnit(input)
            let result = convertHandler.convert(initNum, initUnit)
            assert.equal(result, "0.81647", "lbs to kg convertion error.")

            done();
        })        

        test("convertHandler should correctly convert kg to lbs.", function (done) {
            let input = "1kg";
            let initNum = convertHandler.getNum(input)
            let initUnit = convertHandler.getUnit(input)
            let result = convertHandler.convert(initNum, initUnit)
            assert.equal(result, "2.20462", "kg to lbs convertion error.")

            assert.equal(result, "2.20462", "kg to lbs convertion error")

            done();
        })
    
    })
    

});