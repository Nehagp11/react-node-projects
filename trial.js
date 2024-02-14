

// [February 21, 2022, 3:39 PM] Sinha, Binoy: 'xyzabcxyzabc'

// function removeDuplicate(str){
//     var map = {};
//     var first = 'a', last = 'z'; 
//     for(var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++ ){
//         map[String.fromCharCode(i)] = 0;
//     }
//     var temp = "";
//     // map = { 'a' : 0, 'b' : 0, 'c' : 0 }
//     // var arr = str.split('');
//     // arr.sort();
//     var i = 0;
//     while(i < str.length){
//         map[str[i]]++;
//         i++;
//     }
//     console.log(map);
//     for(var key in map){
//         if(map[key] > 0){
//             temp = temp + key;
//         }
//     }
//     return temp;
// }

// console.log(removeDuplicate("xyzabcxyzabc"));


function removeDuplicate(str){

    var map = {};

    var first = 'a', last = 'z'; 

    for(var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++ ){

        map[String.fromCharCode(i)] = 0;

    }

    var temp = "";


    // map = { 'a' : 0, 'b' : 0, 'c' : 0, d: 0, e:0, f:0, g: 0 }

    var i = 0;

    while(i < str.length){

        map[str[i]]++;

        i++;

    }

    for(var key in map){

        if(map[key] > 0){

            temp = temp + key;

        }

    }

    return temp;

}

console.log(removeDuplicate("xyzabcxyzabc"));

var arr = [-2,7,-5,-7,1,9,6,88];

function swap(arr, i , j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function segregate(arr){
    var i = 0, j = arr.length - 1;
    // while(i < arr.length){
    //     if(arr[i] >= 0){
    //         break;
    //     }
    //     i++;
    // }

    while(i < j){
        if(arr[i] > 0 && arr[j] < 0){
            swap(arr, i, j);
            i++; j--;
        }
        if(arr[i] < 0){
            i++;
        }
        if(arr[j] > 0){
            j--;
        }
    }

    for(i = 0; i < arr.length; i++){
        console.log(arr[i] + " ");
    }
}

segregate(arr);

fetch('https://api.github.com/users/manishmshiva', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
.then(json => console.log(json)).catch(err => console.log(err));

// data to be sent to the POST request
let _data = {
    title: "foo",
    body: "bar", 
    userId:1
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json)).catch(err => console.log(err));

  var xx = "2wrefd2344vgtggt1";

  var onlyNums = xx.replaceAll(/[a-zA_Z]+/g, '');

  var removeNums = xx.replaceAll(/\d+/g, '');

  console.log('nums , letters', onlyNums, removeNums);

