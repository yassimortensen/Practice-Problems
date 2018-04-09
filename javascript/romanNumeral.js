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
