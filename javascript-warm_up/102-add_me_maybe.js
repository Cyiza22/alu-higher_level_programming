#!/usr/bin/node
function addMeMaybe (number, theFunction) {
  number = number + 1;
  theFunction(number);
}

module.exports = { addMeMaybe };
