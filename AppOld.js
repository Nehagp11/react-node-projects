import './App.css';
import React from "react";
import Counter from "./clickwithUseReducer";
import MovieList from "./movieList";
import Board from "./puzzle";
// import AutoComplete from "./AutoComplete";
// import FolderCompnent from "./FolderComponent";
import CardGame from "./cardGame"
import TictacToe from './TictacToe';

function App() {
  return (
    <div className="main-container">
      {/* <Counter initialCount={5} /> */}
      {/* <MovieList /> */}
      {/* <CardGame /> */}
      < TictacToe gridSize={3} />
      <Board initialConfiguration={[1,2,0,4,5,7,8,3,9,10, 11, 12, 13, 14, 15]} onSolveCallback={()=> alert("you solved")}></Board>
    </div>
  );
}

export default App;
