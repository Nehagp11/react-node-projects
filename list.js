


var arr = [2, 4, 2, 5, 3, 6, 3]
// func(arr, 2) => [[2,4],[2,5],[3,6],[3]]
// func(arr,3) => [[2,4,2],[5,3,6],[3]]

function func(arr, chunckLenght){
    var outputArr = [], temp =[];
    for(var i = 0; i < arr.length; i = i + chunckLenght){
        temp = [];
        for(let j = 0; j < chunckLenght && i + j < arr.length; j++){
            temp.push(arr[i + j]);
        }
        outputArr.push(temp);
    }
    return outputArr;
}

console.log(func(arr, 2));
console.log(func(arr, 3));

var arr1 = ["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"]

function sum(arr){
    var total = 0, num;
    for(var key in arr){
        num = arr[key].replace(/[a-zA-Z]/g, '');
        total = total + Number(num);
    }
    return total;
}

var numbers = 'something102asdfkj1948948'.match(/\d+/g).join('');
var wordswithoutNumber = 'something102asdfkj1948948'.replace(/\d+/g, '');

// /\d+/g

console.log(numbers);
console.log(wordswithoutNumber);

console.log(sum(arr1));

var obj = { a: { b: { c: 2, d: 3 } } };

function func3(obj, path){
    var properties = path.split('.');
    var tempObj = Object.create(obj); 
    for(var key in properties){
        if(tempObj[properties[key]]){
            tempObj = tempObj[properties[key]];
        } else {
            return undefined;
        }
    }
    return tempObj;
}

console.log(func3(obj, 'a.b.c')) // 2 
console.log(func3(obj, 'a.b'));   // { c: 2, d: 3 }
