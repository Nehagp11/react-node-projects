import React, {useState} from 'react';

// the exported component can be either a function or a class

export default function Board({ initialConfiguration, onSolveCallback }) {
  let [boardArray, setBoardArray] = useState(initialConfiguration);
  let [empty_index, setEmptyIndex] = useState(boardArray.indexOf(0));
  let empty_coordinate =  [Math.floor(empty_index/4), empty_index%4];
  const isPuzzleSolved = (ele, coordinate, index) => {
    // Check empty slide is a neighbour
    console.log(coordinate, empty_coordinate);
    if((coordinate[0] == empty_coordinate[0] && (coordinate[1] == empty_coordinate[1] + 1 || coordinate[1] == empty_coordinate[1] - 1)) || (coordinate[1] == empty_coordinate[1] && (coordinate[0] == empty_coordinate[0] - 1 || coordinate[0] == empty_coordinate[0] + 1))){
      boardArray[empty_index] = ele;
      boardArray[index] = 0;
      setEmptyIndex(index);
      empty_coordinate = [Math.floor(index/4), index%4]; 
      let borardCopy = JSON.parse(JSON.stringify(boardArray));    
      setBoardArray(borardCopy);
      if(checkPuzzleComplete(borardCopy)){
        onSolveCallback();
        // alert("CONGRATULATIONS, You solved the puzzle");
      }
    }
    }

    const checkPuzzleComplete = (borardCopy) => {
      let currentIndex = 0, size = borardCopy.length, currentNumber = 1;
      if(empty_index == size - 1){
        while(currentIndex < size - 1){
          if(borardCopy[currentIndex] == currentNumber){
            currentIndex++; 
            currentNumber++;
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
      return true;
    }
  return (<div className="board">
  {boardArray.map((ele, index) =>  <div className={ele == 0 ? "empty tile" : "tile"} onClick={(e) => isPuzzleSolved(ele, [Math.floor(index/4), index % 4], index)}>{ele}</div> )} 
</div>);
}
