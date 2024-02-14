// import { useCallback, useMemo } from "react";

var arr = [1,2,3,4,5,6,7,7,8,9];

function binarySearch(arr, target, start, end){
    let mid = Math.floor((start + end)/2);
    if(start <= end){
        if(arr[mid] == target && arr[mid-1] != target){
            return mid;
        }
        let current = mid;
        if(target > arr[mid]){
            return binarySearch(arr, target, mid + 1, end);
        } else {
            return binarySearch(arr, target, start, mid - 1);
        }
    }
}

// console.log(binarySearch(arr, 7, 0, arr.length -1));

function sum(x){
    return function xx(y){
        return x + y;
    }
}

var add = sum(4);
// console.log(add(2));
// console.log(add(5));
// console.log(add(6));

function join(a,b = '',c = ''){
    return `${a}_${b}_${c}`
  }
  
  function curry(func) {
      var str = '';
      function inner(...args){
        if([...args].length == 0){
            return str;
        } else {
            str += func(...args);
        }
        return inner;
      }
      inner.toString = function(){
        return str;
      }
      return inner;
  }
  
  const curriedFn = curry(join);
//   console.log(curriedFn);
  
 console.log(curriedFn(1,2,3)()); // 1_2_3
  console.log(curry(join)(1,2)(3)())  //1_2_3
  console.log(curry(join)(1)(2)(3).toString());  //1_2_3
// useCallback() useMemo((a, b)=> a * b, [a.b])


var arr = [1,0,3,0,13,0,0];
let start = 0, end = arr.length - 1; 

while(arr[end] == 0 && end > 0){
    end--;
}

for(let i = 0; i <= end; i++){
    if(arr[i] == 0 && i < end){
        let temp = arr[end];
        arr[end] = arr[i];
        arr[i] = temp;
        end--;
    }
}

console.log(arr);


// move zeros to end
// [1,3,13,0,0]




