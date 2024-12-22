let numbers=[7,8,2,4,42,61,53];

function sortNumbers(numbers){
   
   return numbers.sort((a,b) => a - b)
    
}

const sortedNumber=sortNumbers(numbers);

console.log(sortedNumber);
