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
