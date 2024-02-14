

const row = 4, col = 5; 
var matrix = [
    ["1","1","1","1","0"],
    ["1","1","0","1","1"],
    ["1","1","0","0","0"],
    ["0","0","0","0","1"]
  ];

  let arr2 = [
    ["0","0","1","1","0"],
    ["1","0","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","1","1"]
];

  // output = 1; 

  function getIslands(matrix){
    let count = 0;
    let row = matrix.length;
    let col = matrix[0].length;
    let connected = false;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j] == 1){
                // if(count == 0){
                //     count = 1;
                //     continue;
                // }
                if(checkAllAdjacentAreZero(matrix, i ,j, row, col)){
                    count++;
                }
            }
        }
    }
    console.log(count);
    return count;
    // let i = 0, j = 0;
  }

  function checkAllAdjacentAreZero(matrix, i ,j, row, col){
    if(i + 1 < row && matrix[i+1][j] == 1){
        return false;
    } 
    if(j + 1 < col && matrix[i][j+1] == 1){
        return false;
    }
    // if(i - 1 >= 0 && matrix[i-1][j] == 1){
    //     return false;
    // } 
    // if(j - 1 >= 0 && matrix[i][j-1] == 1){
    //     return false;
    // }
    return true; 
  }

  getIslands(matrix);

  function curry(func) {
    return function curried(...args) {
      console.log("func length", func.length);
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  }

  function sum(a, b, c){
    return a + b + c;
  }

  let curriedFn = curry(sum);
  
  console.log(curriedFn(23)(2)(6));
  console.log(curriedFn(23, 6));