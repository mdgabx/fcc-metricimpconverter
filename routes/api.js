'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get(function (req, res) {
    let input = req.query.input

    let initNum = convertHandler.getNum(input)
    let initUnit = convertHandler.getUnit(input)
    
    if(!initNum && !initUnit) {
      res.send("invalid number and unit")
    } else if (!initNum) {
      res.send("invalid number")
    } else if (!initUnit) {
      res.send("invalid unit")
    } else {
      return res.json({ 
        initNum,
        initUnit 
      });
    }

    

  })

};
