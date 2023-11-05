// split the number and unit

function numAndUnitSplitter(input) {
  // let regex = /^(\d+(\.\d+)?|(\d+\/\d+))?([a-zA-Z]+)?$/
  let number = input.match(/^((\d+(\.\d+))|(\d+\/\d+))/g)
  let unit = input.match(/([a-zA-Z]+)$/g)

  console.log('unit', unit)
  console.log('number', number);



//  return [value, unit]
}

// change unit and vice versa 

function changeUnit( initUnit ) {

  let returnUnit;

  switch(initUnit) {
    case "gal":
      returnUnit = "L";
      break;
    case "L":
      returnUnit = "gal";
      break;
    case "lbs":
      returnUnit = "kg";
      break;
    case "kg":
      returnUnit = "lbs";
      break;
    case "mi":
      returnUnit = "km";
      break;
    case "km":
      returnUnit = "mi";
      break;
  }

  return returnUnit;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numAndUnitSplitter(input);

    return result[0]
  };
  
  this.getUnit = function(input) {
    let result = numAndUnitSplitter(input)
    
    return result[1];
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = changeUnit(initUnit);
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if(initUnit === 'gal') {
      result = initNum * galToL
    } else if (initUnit === 'L') {
      result = initNum / galToL
    } else if (initUnit === 'lbs'){
      result = initNum * lbsToKg
    } else if (initUnit === 'kg') {
      result = initNum / lbsToKg
    } else if (initUnit === 'mi') {
      result = initNum * miToKm
    } else if (initUnit === 'km') {
      result = initNum / miToKm
    } else {
      result = undefined;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
