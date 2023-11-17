// split the number and unit

function numAndUnitSplitter(input) {

  if(input) {
    // get the units and initial value

    let valueMatch = input.match(/[^a-zA-Z]+/);
    let unitMatch = input.match(/[a-zA-Z]+/);

    let number;
    let unit;

    if(valueMatch) {
      // check if there are whole(w decimal) or fraction
      let validNumRegex = /^(\d+(\.\d+)?)$|^(\d+(\.\d+)?\/\d+(\.\d+)?)$/g;

      if(validNumRegex.test(valueMatch)) {
        let value = valueMatch;

        // check for fraction
        number = checkNumber(value);

      } else {
        number = undefined
      }
    } else {
      number = 1;
    }

    if(unitMatch) {
      unit = unitMatch[0]
    } else {
      unit = undefined;
    }

    console.log('number', number);
    console.log('unit', unit);

    return [number, unit];

  } else {
    return [1, undefined]
  }
}


// check the number if fraction  

function checkNumber(possibleFraction) {

  let value = possibleFraction;
  let returnValue;
  let nums;

  if(/^\d+(\.\d+)?\/\d+(\.\d+)?$/.test(value)) {
   nums = value[0].split("/")
   returnValue = parseFloat(nums[0]) / parseFloat(nums[1])
  } else {
    returnValue = parseFloat(value[0])
  }

  return returnValue;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numAndUnitSplitter(input)

    return result[0];
  };
  
  this.getUnit = function(input) {
      let result = numAndUnitSplitter(input)

      if(result[1] !== undefined) {
        let unit = result[1].toLowerCase();

        switch(unit) {
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
    }
  };
  
  this.getReturnUnit = function(initUnit) {

    if(initUnit) {
      
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
