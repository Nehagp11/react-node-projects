import React from "react";

export default class TictacToe extends React.Component{
    constructor(props){
        super(props);
        this.players = { player1 : {symbol : "X", "turn" : true}, player2 : {symbol : "0", "turn" : false}};
        this.state = {turn : this.players.player1};
        this.tilesArray = new Array(props.gridSize);
        let gridSize = props.gridSize;
        for(let i = 0; i < gridSize; i++) {
            this.tilesArray[i] = Array(gridSize).fill(0);
        }
    }

    clickOnTile = (e) => {
        if(e.target.innerText){
            alert("Already filled, Please click on empty cells");
        }
        let currentPlayer;
        if(this.state.turn.symbol == this.players.player1.symbol){
            currentPlayer = this.players.player1;
        } else if(this.state.turn.symbol == this.players.player2.symbol){
            currentPlayer = this.players.player2;
        }
        e.target.innerText = currentPlayer.symbol;
        this.checkWinScenerio(e, currentPlayer);
        this.setState({turn : (this.state.turn.symbol == this.players.player1.symbol ? this.players.player2 : this.players.player1)});
    }

    checkWinScenerio = (e, currentPlayer) => {
        let currentRow = e.target.dataset.rowIndex;
        let currentCol = e.target.dataset.colIndex;
        let gridSize = this.props.gridSize;
        const rowElems = document.querySelectorAll('.tile[data-row-index="'+ currentRow +'"]');
        const colElems = document.querySelectorAll('.tile[data-col-index="'+ currentCol +'"]');
        let playerWon = false;
        let i;
        for(i = 0; i < gridSize; i++){
            if(rowElems[i].innerText != currentPlayer.symbol){
                break;
            }
        }
        if(i == gridSize){
            alert("" + currentPlayer.symbol + " won");
            return true;
        }

        for(i = 0; i < gridSize; i++){
            if(colElems[i].innerText != currentPlayer.symbol){
                break;
            }
        }
        if(i == gridSize){
            alert("" + currentPlayer.symbol + " won");
            return true;
        }
    }

    render(){
        return <>
        {this.tilesArray.map((arr, row) => <div className="board-row">
            {arr.map((ele, col) => <div className="tile" data-index={row * this.props.gridSize + col} data-row-index={row} data-col-index={col} onClick={this.clickOnTile}></div> )}
            </div> 
        )}
        </>
    }
}

// https://www.techinterviewhandbook.org/coding-interview-study-plan/