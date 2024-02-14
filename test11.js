/* 
 Write your own implementation of Array.map called myMap.
 const arr = [1,2,3,4]
 console.log(arr.myMap((el, index, array) => el + 1)) // [2,3,4,5]
*/


const arr = [1,2,3,4]

Array.prototype.myMap = function(fn){
    let arr = this; 
    let outputArr = [];
    let length = arr.length;
    for(let i =0; i < length; i++){
        outputArr.push(fn(arr[i], i));
    }
    return outputArr;
}

// console.log(arr.myMap((el, index, array) => el * el)) // [2,3,4,5]


Array.prototype.myReduce = function(fn, initialVal){
    let arr = this;
    var initialValue = initialVal;
    let i = 0, length = arr.length;
    if(!initialValue){
        i = 1;
        initialValue = arr[0];
    }
    while(i < length){
        initialValue = fn(initialValue, arr[i]);
        i++;
    }
    return initialValue;
}

const sumWithInitial = arr.myReduce(
  (accumulator, currentValue) => accumulator * currentValue,
  0
);

console.log(sumWithInitial)

function parent(){
    
}

let id = function() {
    let parCount = 0;
    function child(){
        parCount = parCount + 1;
        return parCount; 
    }
    return child;
}

const childn = id();

//console.log(childn()) // 1
//console.log(childn()) // 2
//console.log(childn()) // 3

let a = {name: 'Cat'}
let b = a
a.name = 'Dog'

console.log('b: ', b.name) // ? Dog   

a = {name: 'Mouse'}
console.log('b 2: ', b.name) // ? Dog 
