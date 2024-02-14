

var str = "I am a good programmer";

function getSecondLargestWord(str){
    let arr = str.split(' ');
    let max1,max2;
    if(arr.length > 2){
        max1 = arr[0].length > arr[1].length ? arr[0] : arr[1];
        max2 = arr[0].length > arr[1].length ? arr[1] : arr[0];
    }

    let temp, size = arr.length;

    for(let i = 2; i < size; i++){
        temp = arr[i];
        if(temp.length > max2.length){
            max2 = temp;
        }
        if(temp.length > max1.length){
            max2 = max1;
            max1 = temp;
        }
    }
    return max2;
}

// console.log(getSecondLargestWord(str));

let str1 = "Friededh", str2 = "Fireddhi";

function checkStringsAreAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }

    let map = {};
    let size = str1.length;

    for(let i = 0; i < size; i++){
        if(map[str1[i]]){
            map[str1[i]]++;
        } else {
            map[str1[i]] = 1;
        }
    }

    console.log(map);

    for(let i = 0; i < size; i++){
        if(!map[str2[i]]){
            return false;
        } else {
            map[str2[i]]--;
        }
    }
    return true;
}

console.log(checkStringsAreAnagram(str1, str2));