/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n"); 
          // Writing output to STDOUT
    let arr = input.split(',');     
    let minDifference = INT_MAX;
    let length = arr.length;
    let output = arr[0];
    for(let i = 0; i < length; i++){
        if(arr[i] == 0){
            output = 0;
            break;
        }
        if(Math.abs(arr[i] - 0) < minDifference){
            minDifference = Math.abs(arr[i] - 0);
            output = arr[i];
        } else if(Math.abs(arr[i] - 0) == minDifference && arr[i] > output){
            output = arr[i];
        }
    }
    process.stdout.write(output);
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here    