

// “PPPPBBBQQDPP” would be encoded as "4P3B2Q1D2P”. 
let str = "PPPPBBBQQDPP";
function countFreq(str){
    let length = str.length;
    let output = '', count = 1;
    let i = 0;
    while(i < length){
        while(str[i] == str[i+1]){
            i++;
            count++;
        }
        output += count + str[i];
        i++;
        count = 1;
    }
    return output;
}

// console.log(countFreq(str));

let str1 = "[{(a)(v)}]";

function validparanthesis(str){
    let openCount = 0, latestOpenBracket = [];
    const length = str.length;
    let output = "valid";
    for(let i = 0; i < length; i++){
        let current = str[i];
        if((current == "{"  || current == "(" || current == "[") && i < length - 1){
            latestOpenBracket.push(current);
            openCount++;
        } else if((current == "}"  || current == ")" || current == "]") && i > 0){
            switch(current){
                case "}" : latestOpenBracket[openCount - 1] == "{" ? output = "valid" : output = "invalid"; break;
                case "]" : latestOpenBracket[openCount - 1] == "[" ? output = "valid" : output = "invalid"; break;
                case ")" : latestOpenBracket[openCount - 1] == "(" ? output = "valid" : output = "invalid"; break;
            }
            if(output == "invalid"){
                return output;
            } else {
                latestOpenBracket.pop();
                openCount--;
            }
        }
    }
    if(openCount == 0 && latestOpenBracket.length == 0){
        return "valid";
    } else {
        return "invalid";
    }
}

// console.log(validparanthesis("[]{()"));

function parent(start, end, limit, time = 0){
function printNumberParent(){
    if(end <= limit){
        var timerId = setTimeout(function(){
            printNumber();
        }, time);
    }
}

function printNumber(){
    for(let i = start; i <= end; i++){
        console.log(i);
    }
    start = start+5, end = end + 5, time = 1000;
    setTimeout(printNumberParent, time);
}
printNumberParent();
}

parent(1, 5, 20, 0);



