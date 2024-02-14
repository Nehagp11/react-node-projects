

function checkSquareArr(arr1, arr2){
    let visitedArr = [];
    if(arr1.length != arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let squarVal = arr1[i] * arr1[i];
        let indexInSecondArray = arr2.indexOf(squarVal);
        if(indexInSecondArray >= 0 && !visitedArr[indexInSecondArray]){
            visitedArr[indexInSecondArray] = true;
        } else{
            return false;
        }  
    }
    return true;
}

//same([1, 2, 3], [4, 1, 9]); //true

//same([1, 2, 3], [1, 9]); //false

// same([1, 2, 1], [4, 4, 1]); //false

console.log(checkSquareArr([1, 2, 3], [4, 1, 9]));
console.log(checkSquareArr([1, 2, 1], [4, 1, 4]));
console.log(checkSquareArr([9, 7, 8], [64, 81, 35, 49]));


