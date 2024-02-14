
function sum(...args){
    var total = 0;
    for(let i in [...args]){
        total += args[i];
    }
    console.log("total = ", total);

    function child(...args1){
        if([...args1].length == 0){
            return total;
        }
        for(let i in [...args1]){
            total += args1[i];
        }
        console.log("total 2 = ", total);
        // return sum(total);
        return child;
    }

    child.toString = child.valueOf = function(){
        console.log("total 3 = ", total);
        return total;
    }
    return child;
}

console.log((sum(2,9)(8, 2)(5,13, 6))());

arr = [12,54,45, 56, 0, 11];

var str = arr.reduce(function(a, b) { return (arr.lastIndexOf(b) == arr.length - 1 ? a + ' or ' + b : a + ', ' + b)});

console.log(str);