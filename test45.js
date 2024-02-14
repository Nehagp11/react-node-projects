console.log("Welcome to Programiz!");
// find triplet which sums to zero 
let inputArray = [0,-1,1,2,8,3,5,-10,-8,3,4,-7];

function getTripltes(arr){
    var output = [];
    arr.sort((a, b) => a - b);
    var end = arr.length;
    var start = 0;
    var map = [];
    
    // for(let i = 0; i < end - 1; i++){
    //     for(let j = i+1; j < end; j++){
    //         let currentSum = arr[i] + arr[j];
    //         var thirdIndex = binarySearch(arr, i+1, end-1, 0-currentSum);
    //         if(thirdIndex != -1 && thirdIndex != i && thirdIndex != j){
    //             var tempArr = [];
    //             tempArr.splice(0, 0, arr[i], arr[j], arr[thirdIndex]);
    //             output.push(tempArr);
    //         }
    //     }
    // }

    // another approach without duplicates 
    for(let i = 0; i < end - 1; i++){
        var x = arr[i];
        let l = i + 1, h = end - 1;
        while(l < h){
            if(arr[l] + arr[h] + x == 0){
                var tempArr = [x, arr[l], arr[h]];
                output.push(tempArr);
                l++;
                h--;
            } else if(arr[l] + arr[h] + x > 0){
                h--;
            } else {
                l++;
            }
        }  
    }

    console.log(output);
}

function binarySearch(arr, start, end, k){
    while(start < end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] == k){
            return mid;
        } else if(arr[mid] > k){
            end = mid - 1;
        } else {
            start = mid + 1; 
        }
    }
    return -1;
}

getTripltes(inputArray);