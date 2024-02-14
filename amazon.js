

// Question1: [Please use any one scripting language of your choice (Python/Perl/Bash)] Determine if a provided string is balanced with opening brackets(it can be either ( or { or [) and closing brackets(it can be either ) or } or ]).

// Ambiguity

// * This string is balanced: “((Hello world))”
// * This string is not balanced as there is an extra closing bracket: “(Hello(World)How Are You?))”
// * This string “(a[]b({d}e))” is balanced
// * String provided via command line argument

// ===============================================================
// Please Write your code here

function checkBalancedString(str){
    let length = str.length;
    let openBracketArr = [];
    let topIndex = 0;
    for(let i = 0; i < length; i++){
        // Check open brackets
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            openBracketArr.push(str[i]);
            topIndex++;
        }
        // check Close brackets
        if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
            if(topIndex <= 0 || openBracketArr.length == 0){
                return false;
            }
            var lastOpenBracket = openBracketArr[topIndex - 1];
            var checkedBrackedMatched;
            switch(str[i]){
                case ')': checkedBrackedMatched = lastOpenBracket == '(' ? true : false; break;
                case '}': checkedBrackedMatched = lastOpenBracket == '{' ? true : false; break;
                case ']': checkedBrackedMatched = lastOpenBracket == '[' ? true : false; break;
            }
            if(!checkedBrackedMatched){
                return false;
            } else {
                topIndex--;
                openBracketArr.pop();
            }
        }
    }
    if(topIndex == 0 && openBracketArr.length == 0){
        return true;
    }
    return false;
}

// ===============================================================



// Question2: [Please use any one high level programming language of your choice (Java/C++/Python)] Given an unsorted, even-numbered array of integers, divide the array into two lists of the equal sizes such that their total is as close as possible

// Example:
// input {1000,500,200,1,5,10,50,70,70,100}
// output:
// List 1 : 500, 200, 100, 70, 70 ==> Sum: 940
// List 2 : 1000, 50, 10, 5, 1 ==> Sum: 1066

// input {50,10,200,150,900,250,40,50,950,5,90,80,60,600}
// output:
// List 1: 900, 600, 90, 60, 50, 10, 5 ==> Sum: 1715
// List 2: 950, 250, 200, 150, 80, 50, 40 ==> Sum: 1720

// ===============================================================
// Please Write your code here

function divideArray(arr){
    var list1 = [], list2 = [];
    var size = arr.length; 
    
    var list1Total = 0, list2Total = 0;
    
    // sort the array in descending order 
    // arr.sort((a, b) => b - a);
    var sum =  arr.reduce((a,b) => a + b);
    
    list1.push(arr[0]);
    list2.push(arr[1]);
    list1Total = arr[0], list2Total = arr[1];
    
    for(let i = 2; i < size; i++){
        let current =  arr[i];
        // check which listTotal is smaller and append current item to that list 
        if(list1Total > list2Total && list2Total < sum/2){
            list2.push(arr[i]);
            list2Total += arr[i];
        } else {
            list1.push(arr[i]);
            list1Total += arr[i];
        }
    }
    return {list_1: list1, list_1_total : list1Total,  list_2 : list2, list_2_total : list2Total};
}

function checkpairExists(shoes){
    var size = shoes.length;
    var marked = new Array(size).fill(-1);
    for(let i = 0; i < size; i++){
        let currentShoe = shoes[i];
        let otherSHoe = [1-currentShoe[0], currentShoe[1]];
        if(shoes.indexOf(otherSHoe) == -1){
            return false;
        }
    }
    return true;
}

var shoeMap = {};

var shoes = [[1, 21], [0, 24], [1, 24], [0, 21]]

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

shoeMap = shoes.reduce((shoeMap, currentShoe) => { if(currentShoe && !shoeMap[currentShoe[1]]){
    shoeMap[currentShoe[1]] = {left : 0, right : 0};
    }
    currentShoe[0] == 0 ?  shoeMap[currentShoe[1]].left = shoeMap[currentShoe[1]].left + 1 : shoeMap[currentShoe[1]].right = shoeMap[currentShoe[1]].right + 1;
    return shoeMap;
}, {});

console.log("shoe pair : "+  Object.keys(shoeMap));

for(let key in shoeMap){
    console.log("shoe pair key :"+  key + " : values : "+ shoeMap[key].left + " " + shoeMap[key].right);
}

console.log(checkBalancedString("{fjhf  cygft()bhuhj()]}"));
console.log(checkBalancedString("{fjhf  cygft()bhuhj()}"));

console.log(divideArray([50,10,200,150,900,250,40,50,950,5,90,80,60,600]));


const R = 3, C = 4;
const val = 1;
 
var arr = Array(R);
for (var i = 0; i < R; i++) {
    arr[i] = Array(C).fill(val);
}
 
console.log(arr);