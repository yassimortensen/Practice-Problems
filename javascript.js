//remove duplicates from sorted list

let nums = [1,1,1,2,2,4,4,4]

function removeDuplicates(nums){
  for(let i=0; i<nums.length; i++){
    if(nums[i] === nums[i+1]){
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

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

//find consecutive run of a given length
let array = [1, 3, 4, 5]
let lengthOfRun = 2

function findConsecutiveRuns(array, lengthOfRun){
  let indices = []
  for(let i=0; i<array.length; i++){
    for(j=1; j<lengthOfRun; j++){
      if (array[i+j-1]+1 !== array[i+j]){
        //first part checks for current place +1
        //second part checks for value of next index
        // array[0+1] (3) !== array[0+1-1]+1 (2)
        // array[0+2] (4) !== array[0+2-1]+1 (4)
        break;
      }
      if (j === lengthOfRun-1){
        indices.push(i)
      }
    }
  }
  return indices
}

//// Given a roman numeral, convert it to an integer.
let roman = "MDLXVII"

function romanNumeral(roman){
  let num = 0;

  for(let i=0; i<roman.length; i++){
    switch(roman[i]){
      case "M":
        num += 1000
        break;
      case "D":
        num += 500
        break;
      case "C":
        num += 100
        break;
      case "L":
        num += 50
        break;
      case "X":
        num += 10
        break;
      case "V":
        num += 5
        break;
      case "I":
        num += 1
        break;
    }
  }
  console.log(num)
  return num
}
