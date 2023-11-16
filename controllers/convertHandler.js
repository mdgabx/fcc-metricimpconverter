// split the number and unit

function numAndUnitSplitter(input) {

  if(input) {
    // test the input 
    // ^(\S+)([a-zA-Z]+)?$|^(\S+)\/(\S+)([a-zA-Z]+)?$|^[a-zA-Z]+$

    let number = input.match(/(^\d+(\.\d+)?$)|(^\d+(\.\d+)?\/\d+(\.\d+)?$)/g); 
    // let number = input.match(/^(\S+)([a-zA-Z]+)?$|^(\S+)\/(\S+)([a-zA-Z]+)?$|^[a-zA-Z]+$/)

    let unit = input.match(/[a-zA-Z]+/);

    console.log('number', number)
    console.log('unit', unit)

    if(!unit) {
      unit = undefined
    } else {
      unit = unit[0]
    }


    // check the number for possible fractions
    let value = checkNumber(number)

    return [value, unit]

  } else {
    return [1, undefined]
  }

}


// check the number if fraction  

function checkNumber(possibleFraction) {

  let value;

  if(possibleFraction.length > 2) {
    return undefined
  } else if (possibleFraction.length === 1) {
    value = parseFloat(possibleFraction[0])
  } else {
    let numerator = possibleFraction[0]
    let denominator = possibleFraction[1]
    value = parseFloat(numerator) / parseFloat(denominator)
  }

  return value;

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
