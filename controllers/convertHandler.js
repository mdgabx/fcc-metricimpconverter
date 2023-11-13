// split the number and unit

function numAndUnitSplitter(input) {
  let number = input.match(/(?:\d+(\.\d+)?|\d+\/\d+)/g) || ["1"]; 
  let unit = input.match(/([a-zA-Z]+)/g)[0];

  console.log('number', number)
  console.log('unit', unit);

  return [number, unit];
}

function checkDiv(posFraction) {
  let nums = posFraction.split("/");

  if(nums.length > 2) {
    return false;
  }

  return nums;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numAndUnitSplitter(input)[0];
    let nums = checkDiv(result);

    if(!nums) {
      return undefined
    }

    let num1 = nums[0];
    let num2 = nums[1] || "1";

    result = parseFloat(num1) / parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)) {
      return undefined
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result = numAndUnitSplitter(input)[1].toLowerCase();

    switch(result) {
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi":
        return "mi";
      case "l":
        return "L";
      case "kg":
        return "kg";
      default:
        return undefined;
    }

  };
  
  this.getReturnUnit = function(initUnit) {
    let result = initUnit.toLowerCase();

    switch(result) {
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "l":
        return "gal";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }

  };

  this.spellOutUnit = function(unit) {
    let result = unit.toLowerCase();

    switch(result) {
      case "gal":
        return "gallons";
      case "l":
        return "liters";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      default:
        return "don't know";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    const unit = initUnit.toLowerCase();
    let result;

    switch (unit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = undefined;
        return 
    }

    return parseFloat(result.toFixed(5));

  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
