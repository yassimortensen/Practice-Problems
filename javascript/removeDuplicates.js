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
