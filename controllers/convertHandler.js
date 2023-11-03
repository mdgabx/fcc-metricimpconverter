// split the number and unit

function numAndUnitSplitter(input) {

  let regex = /^(\d+(\.\d+)?|(\d+\/\d+))([a-zA-Z]+)$/

  let match = input.match(regex)

  let unit = match[match.length - 1]
  let value = match[1]

  return [unit, value]
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = numAndUnitSplitter(input);

    return result[1]
  };
  
  this.getUnit = function(input) {
    let result = numAndUnitSplitter(input)
    
    return result[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
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
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
