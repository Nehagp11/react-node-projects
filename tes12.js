// Sort an array/linked list of 0s, 1s and 2s 

let Input = [0, 1, 2, 0, 1, 2];
// [0, 1, 1, 0, 2, 2] // start = 1 
// 
Output: {0, 0, 1, 1, 2, 2} 


let Input2 = [1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1, 0]
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2} 

  
Input: {2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0} 
Output: {0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2}


// Input: {0, 1, 2, 0, 1, 2} 
function sortArr(arr){
    let end = arr.length - 1; // end = 5
    let start = 0, mid = start + 1;

    while(arr[end] == 2){
        end--;
    } // end = 4

    while(arr[start] == 0){
        start++;
    }
    for(let i = start; i <= end; i++){
        const pi = 3.14;
        let x = arr[i]
        switch(x){
            case 0 : {
                swap(arr, i, start);
                start++;
                break;
            }
            case 2 : {
                swap(arr, i, end);
                end--;
                break;
            } 
        }
    }
    // console.log(start);
    return arr;
}


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(sortArr(Input));
console.log(sortArr(Input2));

// let var 

const obj = {"name":"Neha", "company":"abc"};
obj.company = "xyz";

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// Array.prototype.