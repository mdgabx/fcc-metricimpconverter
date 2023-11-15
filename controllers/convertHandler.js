// split the number and unit

function numAndUnitSplitter(input) {
  let number = input.match(/(\d+(?:\.\d+)?)/g); 
  let unit = input.match(/[a-zA-Z]+/);

  console.log('number', number);
  console.log('unit', unit);

  // console.log(validateInput)

  // if(!validateInput) {
  //   return [undefined, undefined]
  // } else {
  //   console.log('valid input');
  // }

  

  // console.log('match', match);


  // if(!match && input.length > 0) {
  //   let checkIfUnit = match.match(/^[a-zA-Z]+$/)

  //   console.log('checkIfUnit', checkIfUnit);

  //   // number = 1;
  //   // unit = checkIfUnit[0];

  // } else if (match && input.length > 0) {
    
  //   // console.log('match else if', match)

  // } else {
  //   number = undefined
  //   unit = undefined

  // }

  // console.log('number', number);
  // console.log('unit', unit)

  // // let unit = input.match(/[a-zA-Z]+/g)[0];

  // // console.log('number', number)
  // // console.log('unit', unit)

  // // if (!match) {
  // //   // If there's no match, treat the number as 1 and return the unit
  // //   return [1,input];
  // // }

  // // let number = match[1] || 1;
  // // let unit = match[4]; // Adjusted index to capture the unit correctly

  // // let value;

  // // if (number.match(/^\d+\/\d+$/)) {
  // //   let fraction = number.split('/');
  // //   let numerator = fraction[0];
  // //   let denominator = fraction[1];
  // //   value = numerator / denominator;
  // // } else {
  // //   value = parseFloat(number);
  // // }

  // // return [value, unit];

  // // return [number, unit]
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
