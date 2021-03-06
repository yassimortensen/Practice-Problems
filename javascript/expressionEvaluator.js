////Our goal is to write a program that is capable of evaluating simple mathematical expressions.
let string = "+ 1 - 1 + 1 7"

function expressionEvaluator(input){
  // string = string.replace(/\s/g, '') //gets rid of spaces
  let newArray = input

  if (typeof input === "string"){
    newArray = input.split(' ')
  }

  if(newArray[0] !== '+' && newArray[0] !== '-'){
    return parseInt(newArray);
  } //returns integer if no operator is found

  let computedValue;

  if (newArray[newArray.length-3] === '-'){
    computedValue = parseInt(newArray[newArray.length-2]) - parseInt(newArray[newArray.length-1])
  } else if (newArray[newArray.length-3] === '+'){
    computedValue = parseInt(newArray[newArray.length-2]) + parseInt(newArray[newArray.length-1])
  }

  if(newArray.length > 3){
    newArray = newArray.slice(0, newArray.length-3)
    newArray.push(computedValue)
    return expressionEvaluator(newArray) //recursive call
  } else {
    return computedValue
  }
}
